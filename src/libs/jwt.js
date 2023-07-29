import jwt from "jsonwebtoken";
import enviroments from "../config/enviroments.js";

const generateToken = async (payload) => {
  const secret = enviroments.SECRET;
  return new Promise((res, rej) => {
    jwt.sign({ id: payload }, secret, { expiresIn: "2m" }, (err, token) => {
      if (err) rej(err);
      res(token);
    });
  });
};

export {
    generateToken
}