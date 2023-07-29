import { Router } from "express";
import { register, login, logout, profile} from "../controllers/auth.controller.js";
import { authUser } from "../middlewares/auth.md.js";
import { authReg, authLog } from "../validation/auth.validation.js";
import { verifyToken } from "../middlewares/jwtValidated.js";

const auth = Router();

auth.post("/register", (req, res, next) => authUser(req, res, next, authReg), register); 
auth.post("/login", (req, res, next) => authUser(req, res, next, authLog) , login);
auth.post("/logout", logout); 
auth.get("/profile", verifyToken, profile); 

export default auth; 