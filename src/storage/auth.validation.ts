import { Transform, Expose } from "class-transformer";
import {
  IsDefined,
  IsString,
  MinLength,
  MaxLength,
  IsEmail,
} from "class-validator";

class authReg {
  @Expose({ name: "username" })
  @IsDefined({
    message: () => {
      throw "Parametro username necesario";
    },
  })
  @IsString({
    message: () => {
      throw "Parameto username invalido";
    },
  })
  @Transform(
    ({ value }) => {
      if (/^[a-z A-Z 0-9]+$/.test(value)) {
        return value;
      } else {
        throw "Parametro username no cumple los requisitos";
      }
    },
    { toClassOnly: true }
  )
  usr: string;

  @Expose({ name: "email" })
  @IsDefined({
    message: () => {
      throw "Parametro email necesario";
    },
  })
  @IsString({
    message: () => {
      throw "Parameto email invalido";
    },
  })
  @IsEmail(
    {},
    {
      message: () => {
        throw "Parametro email no cumple los requisitos";
      },
    }
  )
  @Transform(
    ({ value }) => {
      return value;
    },
    { toClassOnly: true }
  )
  eml: string;

  @Expose({ name: "password" })
  @IsDefined({
    message: () => {
      throw "Parametro password necesario";
    },
  })
  @IsString({
    message: () => {
      throw "Parameto password invalido";
    },
  })
  @MinLength(8, {
    message: () => {
      throw "Parametro password no cumple con el minimo de caracteres";
    },
  })
  @MaxLength(16, {
    message: () => {
      throw "Parametro password sobrepasa los limites de caracteres";
    },
  })
  @Transform(
    ({ value }) => {
      if (/^[a-z A-Z 0-9]+$/.test(value)) {
        return value;
      } else {
        throw "Parametro password no cumple los requisitos";
      }
    },
    { toClassOnly: true }
  )
  ps: string;

  constructor(usr: string, eml: string, ps: string) {
    this.usr = usr;
    this.eml = eml;
    this.ps = ps;
  }
}

class authLog {
  @Expose({ name: "email" })
  @IsDefined({
    message: () => {
      throw "Parametro email necesario";
    },
  })
  @IsString({
    message: () => {
      throw "Parameto email invalido";
    },
  })
  @IsEmail(
    {},
    {
      message: () => {
        throw "Parametro email no cumple los requisitos";
      },
    }
  )
  @Transform(
    ({ value }) => {
      return value;
    },
    { toClassOnly: true }
  )
  eml: string;

  @Expose({ name: "password" })
  @IsDefined({
    message: () => {
      throw "Parametro password necesario";
    },
  })
  @IsString({
    message: () => {
      throw "Parameto password invalido";
    },
  })
  @MinLength(8, {
    message: () => {
      throw "Parametro password no cumple con el minimo de caracteres";
    },
  })
  @MaxLength(16, {
    message: () => {
      throw "Parametro password sobrepasa los limites de caracteres";
    },
  })
  @Transform(
    ({ value }) => {
      if (/^[a-z A-Z 0-9]+$/.test(value)) {
        return value;
      } else {
        throw "Parametro password no cumple los requisitos";
      }
    },
    { toClassOnly: true }
  )
  ps: string;

  constructor(eml: string, ps: string) {
    (this.eml = eml), (this.ps = ps);
  }
}
export { authReg, authLog };
