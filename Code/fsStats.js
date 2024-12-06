const fs = require('fs').promises;

async function getFileStats(path) {
  try {
    const stats = await fs.stat(path)
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.size, 'bytes');
  } catch (err) {
    console.error(err);
  }
}

getFileStats('./Code/example.txt');
