const express = require("express");
const cors = require("cors");
require("dotenv").config()
const mongoose = require("mongoose");

const app = new express();


app.use(cors({
    origin: process.env.FRONTEND_URL || "",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// database connect

const dbUrl = process.env.DB_URL;

mongoose
    .connect(dbUrl)
    .then((res) => {
        console.log('Database connected.');
    })
    .catch((err) => {
        console.error('Database connection failed:', err);
    });







module.exports = app;



