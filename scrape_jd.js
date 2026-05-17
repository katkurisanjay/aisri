const fs = require('fs');
const https = require('https');

https.get('https://www.justdial.com/Warangal/AISRI-COSMETIC-CLINIC-Near-By-Ksr-Plaza-4Th-Floor-Hanamkonda/9999PX870-X870-230113113919-N2R3_BZDET/gallery?tab=interior', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const matches = data.match(/https:\/\/images\.jdmagicbox\.com\/[^"'\s>]+/g) || [];
    const unique = [...new Set(matches)];
    fs.writeFileSync('jd_images.txt', unique.join('\n'));
    console.log(`Found ${unique.length} images`);
  });
}).on('error', (err) => {
  console.error(err);
});
