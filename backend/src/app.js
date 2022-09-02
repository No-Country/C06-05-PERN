require("dotenv").config()
const express = require('express')
const morgan = require("morgan")
const cors = require('cors')
const app = express()

app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const goodsRouter = require('./routes/ProductRoutes')
const catRoutes = require("./routes/catRoutes")
const userRoutes = require("./routes/userRoute")
const comprasRoutes = require("./routes/comprasRoutes")
const domiRoutes = require("./routes/domiRoutes")
const petRoutes = require("./routes/pedidoRoutes")


app.use(morgan('dev'))
app.use(express.json());

app.use("/api", goodsRouter);
app.use("/api", catRoutes)
app.use("/api", userRoutes)
app.use("./api", comprasRoutes)
app.use("./api", domiRoutes)
app.use("./api", petRoutes)

module.exports = app