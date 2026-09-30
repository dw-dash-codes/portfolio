const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "public", "projects");
const files = fs.readdirSync(dir);

async function run() {
  console.log("Optimizing images in:", dir);
  let totalBefore = 0;
  let totalAfter = 0;

  for (const f of files) {
    if (f.endsWith(".png") || f.endsWith(".jpg") || f.endsWith(".jpeg")) {
      const inputPath = path.join(dir, f);
      const name = f.substring(0, f.lastIndexOf("."));
      const outputPath = path.join(dir, `${name}.webp`);

      const beforeStat = fs.statSync(inputPath);
      totalBefore += beforeStat.size;

      // Convert to webp with high quality and balanced compression
      await sharp(inputPath)
        .webp({ quality: 82, effort: 6 })
        .toFile(outputPath);

      const afterStat = fs.statSync(outputPath);
      totalAfter += afterStat.size;

      const savedPercent = (100 - (afterStat.size / beforeStat.size) * 100).toFixed(1);
      console.log(
        `✓ ${f} (${(beforeStat.size / 1024 / 1024).toFixed(2)} MB) → ${name}.webp (${(afterStat.size / 1024).toFixed(1)} KB) [Saved ${savedPercent}%]`
      );
    }
  }

  console.log("-----------------------------------------");
  console.log(`Total Before: ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total After:  ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total Space Saved: ${(100 - (totalAfter / totalBefore) * 100).toFixed(1)}%`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
