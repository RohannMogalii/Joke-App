const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev";
app.use(express.static("public"));

app.get('/',async (req,res)=>{
    const result = await axios.get(API_URL + "/joke/Any",);
    res.render('index.ejs',{joke : result.data.joke , category : result.data.category, type: result.data.type, setup: result.data.setup, delivery:result.data.delivery});
})

app.listen(port,()=>{
    console.log(`Running on port ${port}`);
})