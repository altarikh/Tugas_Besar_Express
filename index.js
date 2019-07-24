const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static('publics'));

//Routes
const homeRouter = require('./routes/home');
const penerbitRouter = require('./routes/penerbit');
const bukuRouter = require('./routes/buku');
const userRouter = require('./routes/user');
const sequelize = require('./configs/sequelize');

//Models
const Buku = require('./models/buku');
const Penerbit = require('./models/penerbit');
const Pengarang = require('./models/pengarang');
const SpesifikasiProduk = require('./models/spesifikasi_produk');
const Kategori = require('./models/kategori')

//Relasi
Buku.hasMany(Kategori);
Kategori.belongsTo(Buku);


// Keranjang.belongsTo(Buku);

Penerbit.hasMany(Buku);
Buku.belongsTo(Penerbit);

Pengarang.hasOne(Buku);
Buku.belongsTo(Pengarang);

SpesifikasiProduk.hasOne(Buku);
Buku.belongsTo(SpesifikasiProduk);


app.use('/home', homeRouter);

app.use('/buku', bukuRouter);
app.use('/penerbit', penerbitRouter);

app.listen(3000, () => {
    console.log('server started');
    sequelize.sync();
})