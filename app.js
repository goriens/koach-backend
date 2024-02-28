const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const errorMiddleware = require("./Middleware/error");
const user = require("./Routes/userRoutes");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", user);
app.use(errorMiddleware);

module.exports = app;
