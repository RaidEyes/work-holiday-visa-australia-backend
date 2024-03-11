import * as dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import postalCodes from "./src/routes/postalCodes.js";

// express app
const app = express();
dotenv.config();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use("/", postalCodes);

// Listen port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port`, process.env.PORT);
});
