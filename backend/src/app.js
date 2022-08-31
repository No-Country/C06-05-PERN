require("dotenv").config();
const cors = require("cors");
const express = require('express')
const morgan = require("morgan")
const passport = require("passport");


const app = express()
app.use(cors());
app.use(passport.initialize());
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