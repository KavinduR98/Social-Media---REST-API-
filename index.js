const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err))

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.listen(8800, () => {
    console.log("Backend server is running")
})
