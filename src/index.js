import express from "express";
import app from "./app.js";
import enviroments from "./config/enviroments.js";
import conx from "./services/db.js";

const SERVER = JSON.parse(enviroments.SERVER); 

const start = async () => {
    try {
        await conx(); 
        app.listen(SERVER, () => {
            console.log(`listening => http://${SERVER.hostname}:${SERVER.port}`)
        })
    }catch (err) {
        console.log(err)
    }
}

start(); 



