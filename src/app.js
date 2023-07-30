import express from "express"; 
import morgan from "morgan";
import cookieParser from "cookie-parser";
import auth from "./routes/auth.routes.js";
import tasks from "./routes/task.routes.js";

const app = express(); 
/**
 * ! middlewares
 * 
 */

app.use(express.json())
app.use(express.text())
app.use(morgan('dev'));
app.use(cookieParser())
/**
 * * Routes
 */

app.use(auth)
app.use(tasks)

export default app; 

