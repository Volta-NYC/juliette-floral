import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const RAW_DIR = path.join(process.cwd(), 'raw messy data');
const DATA_DIR = path.join(process.cwd(), 'data');
const MEDIA_DIR = path.join(process.cwd(), 'public', 'media');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(MEDIA_DIR)) fs.mkdirSync(MEDIA_DIR, { recursive: true });

const products = [];
const mediaMap = {};
const collections = new Set();
const slugCounts = {};
const PROMO_LINE_REGEX = /(MOM26|Make Mom feel extra special|Mother['’]s Day|mothers day|moms who deserve|\$10 OFF|Limited availability)/i;
const business = {
  name: 'Juliette Floral Design',
  address: '170 5TH AVE, BROOKLYN, NY 11217',
  email: 'juliettefloraldesign1@gmail.com',
  phone: '347-916-0013',
  hours: 'Usually ready in 24 hours',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100063980715412',
    instagram: 'https://instagram.com/juliette.floral'
  }
};

async function downloadImage(url, destPath) {
  if (fs.existsSync(destPath)) return true; // Already downloaded
  try {
    console.log(`Downloading ${url}`);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(destPath, Buffer.from(buffer));
    return true;
  } catch (err) {
    console.error(`Failed to download ${url}:`, err.message);
    return false;
  }
}

async function processFiles() {
  const files = fs.readdirSync(RAW_DIR).filter(f => f.endsWith('.md'));
  
  for (const file of files) {
    const filePath = path.join(RAW_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract frontmatter
    const urlMatch = content.match(/url:\s*"([^"]+)"/);
    const titleMatch = content.match(/title:\s*"([^"]+)"/);
    
    const originalUrl = urlMatch ? urlMatch[1] : '';
    let title = titleMatch ? titleMatch[1].replace(/\\n/g, '').replace('– Juliette Floral Design', '').trim() : file.replace('.md', '');
    
    // Clean up title format like "    Acadia"
    title = title.replace(/\s+/g, ' ').trim();

    // Skip empty titles
    if (!title) title = file.replace('.md', '');

    let slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    if (slugCounts[slug]) {
      slugCounts[slug]++;
      slug = `${slug}-${slugCounts[slug]}`;
    } else {
      slugCounts[slug] = 1;
    }
    
    // Extract description
    // The description is usually between "View store information" or "Add to cart" and "Share"
    let description = '';
    const descMatch = content.match(/(?:View store information|Add to cart)\s*([\s\S]*?)\s*Share/);
    if (descMatch && descMatch[1]) {
        description = descMatch[1]
          .split('\n')
          .map(l => l.trim())
          .filter(l => l && !l.includes('Pickup available') && !l.includes('Usually ready in 24 hours') && !l.includes('Decrease quantity') && !l.includes('Increase quantity') && !PROMO_LINE_REGEX.test(l))
          .join('\n');
    }
    
    // Fallback: If description is too short or missing, we try to capture the paragraph right after the title heading
    if (!description || description.length < 10) {
        const titleRegex = new RegExp(`# ${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*([\\s\\S]*?)\\s*Share`, 'i');
        const fallbackMatch = content.match(titleRegex);
        if (fallbackMatch && fallbackMatch[1]) {
             description = fallbackMatch[1]
             .replace(/\[\*\*.*?\*\*\]\(.*?\)/g, '') // remove bold links
             .replace(/Quantity\s*Decrease.*Add to cart/g, '') // remove quantity/cart
             .split('\n')
             .map(l => l.trim())
             .filter(l => l && !l.includes('Pickup available') && !l.includes('Usually ready in 24 hours') && !PROMO_LINE_REGEX.test(l))
             .join('\n');
        }
    }

    // Extract images
    const imageMatches = [...content.matchAll(/!\[.*?\]\((https:\/\/juliettefloraldesign1\.com\/cdn\/shop\/(?:files|products)\/[^)]+)\)/g)];
    const imagePaths = [];
    
    for (const match of imageMatches) {
      // Remove query parameters for filename and download url
      const rawUrl = match[1];
      if (rawUrl.includes('Black_on_Transparent')) continue;
      
      const cleanUrl = rawUrl.split('?')[0];
      const filename = path.basename(cleanUrl);
      
      const ext = path.extname(filename) || '.jpg';
      const hash = crypto.createHash('md5').update(cleanUrl).digest('hex').substring(0, 8);
      const localFilename = `${slug}-${hash}${ext}`;
      const localPath = path.join(MEDIA_DIR, localFilename);
      const relativePath = `/media/${localFilename}`;
      
      const downloaded = await downloadImage(rawUrl, localPath); // using the rawUrl (with query params) to download is safer for cdns
      const finalPath = downloaded ? relativePath : cleanUrl;

      if (!imagePaths.includes(finalPath)) {
        imagePaths.push(finalPath);
      }

      mediaMap[rawUrl] = {
        localPath: finalPath,
        sourceFile: file,
        productSlug: slug
      };
    }
    
    // Extract variants / prices
    // Format: "Petite $125" or "Size: Petite $125" or "$150"
    const variants = [];
    const priceMatches = [...content.matchAll(/(?:Size:\s*)?([A-Za-z\s()0-9-]+)?\$([0-9.,]+)/g)];
    for (const match of priceMatches) {
       const variantName = (match[1] || 'Standard').trim().replace(/:\s*$/, '');
       const priceStr = match[2].replace(/,/g, '');
       const price = parseFloat(priceStr);
       if (!isNaN(price) && !PROMO_LINE_REGEX.test(variantName) && !variants.some(v => v.price === price && v.name === variantName)) {
           variants.push({ name: variantName, price });
       }
    }

    // Attempt to extract collection from url or context
    let category = "flowers";
    if (originalUrl.includes('collection')) {
       const colMatch = originalUrl.match(/collections\/([^/]+)/);
       if (colMatch) category = colMatch[1];
    } else if (file.includes('plants') || title.toLowerCase().includes('plant') || title.toLowerCase().includes('terrarium')) {
        category = 'plants';
    } else if (title.toLowerCase().includes('card')) {
        category = 'cards';
    } else if (title.toLowerCase().includes('dry') || title.toLowerCase().includes('dried')) {
        category = 'dry-flowers';
    }
    collections.add(category);
    
    // Add product
    products.push({
      id: slug,
      name: title,
      slug: slug,
      category: category,
      description: description,
      variants: variants,
      images: imagePaths,
      originalUrl: originalUrl,
      sourceFile: file
    });
  }
  
  // Save data files
  fs.writeFileSync(path.join(DATA_DIR, 'products.json'), JSON.stringify(products, null, 2));
  fs.writeFileSync(path.join(DATA_DIR, 'collections.json'), JSON.stringify(Array.from(collections), null, 2));
  fs.writeFileSync(path.join(DATA_DIR, 'business.json'), JSON.stringify(business, null, 2));
  fs.writeFileSync(path.join(DATA_DIR, 'media-map.json'), JSON.stringify(mediaMap, null, 2));
  
  console.log(`Processed ${products.length} products.`);
  console.log(`Saved data to ${DATA_DIR}`);
  console.log(`Saved media to ${MEDIA_DIR}`);
}

processFiles().catch(console.error);
