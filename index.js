import * as dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

// express app
const app = express();
dotenv.config();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Listen port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port`, process.env.PORT);
});
