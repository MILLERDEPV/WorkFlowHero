import express from "express";
import app from "./app.js";
import enviroments from "./config/enviroments.js";

app.use(express.json())
app.use(express.text())

const SERVER = JSON.parse(enviroments.SERVER); 

app.listen(SERVER, () => {
    console.log(`listening => http://${SERVER.hostname}:${SERVER.port}`)
})

