const express = require('express');
const app = express();

const hbs    = require("hbs");
const path   = require("path");

const bodyParser   = require("body-parser");

app.listen(9099,function(){
    console.log("Server is running at http://localhost:" + String(9099));
});