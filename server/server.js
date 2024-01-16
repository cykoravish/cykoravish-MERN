require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./routes/auth-router");
const contactRoute = require("./routes/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

// to get the json data in express app.
app.use(
  cors({
    origin: "http://localhost:5173",
    method: "GET, POST,PUT, DELETE, PATCH, HEAD",
    credentials: true,
  })
);
app.use(express.json());

// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
