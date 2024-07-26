const express = require('express');
const cors = require('cors'); // додайте цей рядок

const productRouter = require('./routes/productRoutes');
const dishRouter = require('./routes/dishRoutes');

const app = express();

app.use(cors({origin: true, credentials: true}));

app.use(express.json());

app.use('/Products', productRouter);
app.use('/Dishes', dishRouter);


module.exports = app;
