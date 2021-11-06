# API DAERAH INDONESIA
Documentasi API Daerah Indonesia, mulai dari Provinsi, Kota-Kabupaten, Kecamatan & Kelurahan.
Jika ingin menjalankan dilokal cukup clone dan jalan npm install, ada juga bisa langsung mencobanya di https://api-daerah-indonesia.herokuapp.com/

## Endpoint Provinsi
```js
method: "GET"
endpoint: "/api/provinsi"
```

## Endpoint Kota-Kabupaten
```js
method: "GET"
endpoint: "/api/kota-kabupaten"
```

## Endpoint Kota-Kabupaten berdasarkan id provinsi
```js
method: "GET"
endpoint: "/api/kota-kabupaten/:id"
```

## Endpoint Kecamatan
```js
method: "GET"
endpoint: "/api/kecamatan"
```

## Endpoint Kecamatan berdasarkan id kota-kabupaten
```js
method: "GET"
endpoint: "/api/kecamatan/:id"
```

## Endpoint Kelurahan
```js
method: "GET"
endpoint: "/api/kelurahan"
```

## Endpoint Kelurahan berdasarkan id kecamatan
```js
method: "GET"
endpoint: "/api/kelurahan/:id"
```