const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static('publics'));

//Routes
const homeRouter = require('./routes/home');
const penerbitRouter = require('./routes/penerbit');
const pengarangRouter = require('./routes/pengarang');
const kategoriRouter = require('./routes/kategori');
const bukuRouter = require('./routes/buku');
const userRouter = require('./routes/user');
const sequelize = require('./configs/sequelize');
const keranjangRouter = require('./routes/keranjang')

//Models
const Buku = require('./models/buku');
const Penerbit = require('./models/penerbit');
const Pengarang = require('./models/pengarang');
const Kategori = require('./models/kategori');
const User = require('./models/user');
const Keranjang = require('./models/keranjang');

//Relasi
Buku.hasMany(Keranjang);
Keranjang.belongsTo(Buku);

User.hasMany(Keranjang);
Keranjang.belongsTo(User);

Kategori.hasMany(Buku);
Buku.belongsTo(Kategori);

Penerbit.hasMany(Buku);
Buku.belongsTo(Penerbit);

Pengarang.hasOne(Buku);
Buku.belongsTo(Pengarang);



app.use('/home', homeRouter);
app.use('/pengarang', pengarangRouter);
app.use('/buku', bukuRouter);
app.use('/kategori', kategoriRouter);
app.use('/penerbit', penerbitRouter);
app.use('/keranjang', keranjangRouter);
app.use('/user', userRouter);

app.listen(3001, () => {
    console.log('server started');
    sequelize.sync();
})