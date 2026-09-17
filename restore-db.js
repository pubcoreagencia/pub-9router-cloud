const fs = require('fs');
const crypto = require('crypto');

if (!process.env.DB_SECRET) {
  console.error('MISSING_REQUIRED_SECRET: DB_SECRET environment variable is required');
  process.exit(1);
}
const secretKey = process.env.DB_SECRET;
const algorithm = 'aes-256-cbc';
const key = crypto.scryptSync(secretKey, 'salt', 32);

if (fs.existsSync('/app/encrypted-db.enc')) {
  try {
    const data = fs.readFileSync('/app/encrypted-db.enc');
    const iv = data.subarray(0, 16);
    const encrypted = data.subarray(16);
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
    
    fs.mkdirSync('/root/.9router/db', { recursive: true });
    fs.writeFileSync('/root/.9router/db/data.sqlite', decrypted);
    console.log('✅ Successfully restored local 9router SQLite database on cloud startup!');
  } catch (err) {
    console.error('❌ Failed to restore database:', err.message);
  }
}
