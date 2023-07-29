import jwt from "jsonwebtoken";
import enviroments from "../config/enviroments.js";

const verifyToken = async (req, res, next) => {
  const auth = req.cookies.auth;
  const secret = enviroments.SECRET;

  if (!auth)
    res.status(401).send({ status: 401, message: "Acceso denegado!" });
  else {
    try {
      const decoded = await new Promise((res, rej) => {
        jwt.verify(auth, secret, (err, decoded) =>
          err ? rej(err) : res(decoded)
        );
      });
      req.access = await decoded;
      next();
    } catch (err) {
      res.status(401).send({ status: 500, message: err.message });
    }
  }
};

export {
  verifyToken,
};
