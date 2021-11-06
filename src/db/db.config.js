const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('../daerah.sqlite', (err) => {
  if (err) {
    if (process.env.NODE_ENV == 'production') {
      process.exit(500)
    }
    
    throw err;
  } 
  console.log('terhubung ke database...');
});

module.exports = db;