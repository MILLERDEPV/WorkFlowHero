import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

const authUser = async (req, res, next, module) => {
  try {
    const data = plainToClass(module, req.body, {
      excludeExtraneousValues: true,
    });
    await validate(data);
    req.body = JSON.parse(JSON.stringify(data));
    next();
  } catch (err) {
    res.status(500).send({ status: 500, message: err });
  }
};

export { authUser };
