const http = require('http');
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const apps = require('./app');

app.use(cors({credentials: true, origin: true}));
const port = process.env.PORT || 4002;

mongoose.set("strictQuery" , true);
const server = http.createServer(apps);

server.listen(port , ()=>{
    console.log(`server start at Port No :${port}`);
});
