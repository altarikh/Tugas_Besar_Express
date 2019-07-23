const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static('publics'));

//Routes
const homeRouter = require('./routes/home');
const productRouter = require('./routes/product');
const penerbitRouter = require('./routes/penerbit');
const bukuRouter = require('./routes/buku');

const sequelize = require('./configs/sequelize');

//Models
const Product = require('./models/product');
const Buku = require('./models/buku');
const Penerbit = require('./models/penerbit');
const Pengarang = require('./models/pengarang');
const SpesifikasiProduk = require('./models/spesifikasi_produk');

//Relasi
Penerbit.hasMany(Buku);
Buku.belongsTo(Penerbit);

Pengarang.hasOne(Buku);
Buku.belongsTo(Pengarang);

SpesifikasiProduk.hasOne(Buku);
Buku.belongsTo(SpesifikasiProduk);


app.use(homeRouter);
app.use('/product', productRouter);
app.use('/buku', bukuRouter);
app.use('/penerbit', penerbitRouter);

app.listen(3000, () => {
    console.log('server started');
    sequelize.sync();
})