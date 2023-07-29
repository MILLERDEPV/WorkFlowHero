import User from "../models/user.model.js";
import argon2 from "argon2";
import { generateToken } from "../libs/jwt.js";

const register = async (req, res) => {
  const { usr, eml, ps } = req.body;
  const hashPS = await argon2.hash(ps)
  try {
    const regUser = new User({
      username: usr,
      email: eml,
      password: hashPS,
    });

    const userSaved = await regUser.save();
    const token = await generateToken(userSaved._id)

    res.cookie("auth", token)
    res.status(201).send({
       _id_: userSaved._id,
       user: userSaved.username,
       createAt:userSaved.createdAt,
       updateAt: userSaved.updatedAt
    })
  } catch (err) {
    res.status(500).send({status: 500, message: err});
  }
};

const login = async (req, res) => {
  const { eml, ps } = req.body;
  const userFound = await User.findOne({email: eml});
  try {
    if(!userFound) res.status(400).send({status: 400, message: "Correo electronico incorrecto!"})
    else {
      const isMatch = await argon2.verify(userFound.password , ps);
      if(!isMatch) res.status(400).send({status: 400, message: "Contraseña incorrecta!"})
      else {
        const token = await generateToken(userFound._id)
        res.cookie("auth", token)
        res.status(201).send({
          _id_: userFound._id,
          user: userFound.username,
          createAt:userFound.createdAt,
          updateAt: userFound.updatedAt
       })
      }
    }
  } catch (err) {
        throw err
  }
};

const logout = (req, res) => {
  res.clearCookie("auth"); 
  res.status(200).send(); 
}


const profile = async (req, res) => {
  const userFound = await User.findById(req.access.id);

  if(!userFound) res.status(400).send({status: 400, message: "Usuario no encontrado"})
  else {
   return res.status(200).send({
      _id_: userFound._id,
      user: userFound.username,
      createAt:userFound.createdAt,
      updateAt: userFound.updatedAt
   })
  }
}

export { register, login, logout, profile};
