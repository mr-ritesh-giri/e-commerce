const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");

const db = require("./config/mongoose-connection");

const port = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouters");
app.set("view engine", "ejs");

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send("Hello guys!");
});

app.listen(port, (req, res) => {
  console.log(`Server is listening at ${port}`);
});
