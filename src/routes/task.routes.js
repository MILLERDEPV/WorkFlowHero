import {Router} from "express";
import { verifyToken } from "../middlewares/jwtValidated.js";
import * as crudTask from "../controllers/task.controller.js";

const tasks = Router(); 

/**
 * ? GET TAKS
 */

tasks.get("/task",  verifyToken, crudTask.getTasks)
tasks.get("/task/:id",  verifyToken, crudTask.getTask)

/**
 * ? POST TASK
 */

tasks.post("/task",  verifyToken, crudTask.createTask)

/**
 * ? UPDATE TASK
 */

tasks.put("/task/:id",  verifyToken, crudTask.updateTask)

/**
 * ? DELETE TASK
 */

tasks.delete("/task/:id",  verifyToken, crudTask.deteleTask)

export default tasks; 