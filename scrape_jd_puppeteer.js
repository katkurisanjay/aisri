const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    await page.goto('https://www.justdial.com/Warangal/AISRI-COSMETIC-CLINIC-Near-By-Ksr-Plaza-4Th-Floor-Hanamkonda/9999PX870-X870-230113113919-N2R3_BZDET/gallery?tab=interior', { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Scroll down to lazy load images
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            let totalHeight = 0;
            let distance = 100;
            let timer = setInterval(() => {
                let scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;
                if(totalHeight >= scrollHeight - window.innerHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });

    const images = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('img'))
        .map(img => img.src || img.getAttribute('data-src'))
        .filter(src => src && src.includes('jdmagicbox') && !src.includes('icon'));
    });
    
    const unique = [...new Set(images)];
    fs.writeFileSync('jd_images_puppeteer.txt', unique.join('\n'));
    console.log(`Found ${unique.length} images`);
    await browser.close();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
