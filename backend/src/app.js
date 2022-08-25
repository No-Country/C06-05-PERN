const express = require('express')
const morgan = require("morgan")


const app = express()

const goodsRouter = require('./routes/ProductRoutes')
const catRoutes = require("./routes/catRoutes")


app.use(morgan('dev'))
app.use(express.json());

app.use("/api", goodsRouter);
app.use("/api", catRoutes)

module.exports = app