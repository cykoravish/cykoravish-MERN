import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
const app = express();

import authRoute from "./router/auth-router.js";
import contactRoute from "./router/contact-router.js";
import serviceRoute from "./router/service-router.js";
import adminRoute from "./router/admin-router.js";
import { connectDb } from "./utils/db.js";
import { errorMiddleware } from "./middlewares/error-middleware.js";

// let's tackle cors
const corsOptions = {
  origin: (origin, callback) => {
    // Check if the origin is allowed
    const allowedOrigins = ["http://localhost:5173"];
    const isAllowed = allowedOrigins.includes(origin);
    callback(null, isAllowed ? origin : false);
  },
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

// let's define admin route
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
