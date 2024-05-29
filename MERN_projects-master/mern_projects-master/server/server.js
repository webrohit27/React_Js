require("dotenv").config(); // impo when you use .env file/ othervise server will fail to connect
const express = require("express");
const cors = require("cors");
const app = express();
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const serviceRouter = require("./router/service-router");
const adminRouter = require("./router/admin-router");

const connectDB = require("./utils/db");
const error_middleware = require("./middlewares/error-middleware");
const services = require("./controllers/service-controller");

//lets takle cors
const corsOption = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors());
app.use(express.json()); // parse incoming requests with json payloads

// mounted router from auth-router.js
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use("/api/data", serviceRouter);

//lets define admin route

app.use("/api/admin", adminRouter);

app.use(error_middleware);

const PORT = 4000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is runing`);
  });
});
