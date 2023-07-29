import {Router} from "express";
import { verifyToken } from "../middlewares/jwtValidated.js";

const tasks = Router(); 

tasks.get("/task",  verifyToken, (req, res) => {
    res.send("hello world!")
})

export default tasks; 