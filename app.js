const express = require("express");
const app = express();
const cors = require("cors");
const PORT =  8000;
const mongoose = require("mongoose");
const router = require("./routes/router");
const path = require('path');

mongoose.connect('mongodb://localhost:27017/clothingweb');


//middleware

app.use(express.json());
app.use(cors({credentials: true, origin: "*"}));
app.use(router)
app.use('/uploads', express.static(path.join("uploads")));

app.listen(PORT , ()=>{
    console.log(`server start at Port No :${PORT}`)
})