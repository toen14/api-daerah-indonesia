const app = require('express')();

const errorHandler = require('./middlewares/error-handler');
const CustomError = require('./errors/custom-error');

const port = process.env.PORT || 1945;
const db = require('./db/db.config');

// Tampilan default API
app.get('/', (_, res) => {
  res.status(200).json({
    statusCode: 200,
    message: 'Selamat datang di API Daerah Indonesia',
    link: 'https://github.com/toen14/api-daerah-indonesia'
  });
})

// Menampikan semua provinsi
app.get('/api/provinsi', (_, res, next) => {
  db.all('SELECT * FROM tbl_provinsi', (err, data) => {
    if (err) {
      return next(err);
    }

    res.status(200).json({
      statusCode: 200,
      jumlahProvinsi: data.length,
      data,
    });
  });
});

// Menampilkan semua kota-kabupaten
app.get('/api/kota-kabupaten', (_, res, next) => {
  const query = 'SELECT * FROM tbl_kota_kabupaten'
  db.all(query, (err, data) => {
    if (err) {
      return next(err);
    }

    res.status(200).json({
      statusCode: 200,
      jumlahKotaKabupaten: data.length,
      data,
    });
  });
});

// Menampilkan kota-kabupaten pada provinsi tertentu
app.get('/api/kota-kabupaten/:idProvinsi', (req, res, next) => {
  const query = 'SELECT * FROM tbl_kota_kabupaten WHERE id_provinsi = ?';
  db.all(query, [req.params.idProvinsi], (err, data) => {
    if (err) {
      return next(err);
    }
    
    if (! data.length) {
      return next( new CustomError(404, 'kota-kabupaten tidak ditemukan !'));
    }

    res.status(200).json({
      statusCode: 200,
      jumlahKotaKabupaten: data.length,
      data,
    });
  });
});

// Menampilkan seluruh kecamatan
app.get('/api/kecamatan', (_, res, next) => {
  const query = 'SELECT * FROM tbl_kecamatan'
  db.all(query, (err, data) => {
    if (err) {
      return next(err);
    }

    res.status(200).json({
      statusCode: 200,
      jumlahKecamatan: data.length,
      data
    });
  });
});

// Menampilkan kecamatan berdasakan kabupaten tertentu
app.get('/api/kecamatan/:idKotaKabupaten', (req, res, next) => {
  const query = 'SELECT * FROM tbl_kecamatan WHERE id_kota_kabupaten = ?'
  db.all(query, [req.params.idKotaKabupaten], (err, data) => {
    if (err) {
      return next(err);
    }

    if (! data.length) {
      return next( new CustomError(404, 'kecamatan tidak ditemukan !'));
    }

    res.status(200).json({
      statusCode: 200,
      jumlahKecamatan: data.length,
      data,
    });
  });
});

// Menampilkan seluruh kelurahan
app.get('/api/kelurahan', (_, res, next) => {
  const query = 'SELECT * FROM tbl_kelurahan'
  db.all(query, (err, data) => {
    if (err) {
      return next(err);
    }

    res.status(200).json({
      statusCode: 200,
      jumlahKelurahan: data.length,
      data,
    });
  });
});

// Menampilkan kelurahan berdasakan kabupaten tertentu
app.get('/api/kelurahan/:idKecamatan', (req, res, next) => {
  const query = 'SELECT * FROM tbl_kelurahan WHERE id_kecamatan = ?'
  db.all(query, [req.params.idKecamatan], (err, data) => {
    if (err) {
      return next(err);
    }

    if (! data.length) {
      return next( new CustomError(404, 'kelurahan tidak ditemukan !'));
    }

    res.status(200).json({
      statusCode: 200,
      jumlahKelurahan: data.length,
      data,
    });
  });
});

app.all('*', function () {
  throw new CustomError(404, 'not found !')
})

app.use(errorHandler);

app.listen(port, () => {
  console.log('Server berjalan di port:', port);
});