import { UserAttributes } from "../../models/User/User.js";
import { Response } from "express";
import jwt from "jsonwebtoken";
import jwtConfig from "../../config/jwt.js";

export class ApiResponse {
  constructor(private res: Response, private defaultStatus?: number) {}

  success<T = any>(data: T, message = "Sucesso", status?: number): any {
    return this.res.status(status ?? this.defaultStatus ?? 200).json({
      status: true,
      message,
      data,
    });
  }

  error(message: string | Error = "Erro", status?: number): any {
    const msg = typeof message === "string" ? message : message.message;
    return this.res.status(status ?? this.defaultStatus ?? 500).json({
      status: false,
      message: msg,
      data: null,
    });
  }

  login(response: { user: UserAttributes }): Response {
    const token = jwt.sign(
      { id: response.user.id, name: response.user.name },
      jwtConfig.secret,
      { expiresIn: jwtConfig.expiresIn }
    );

    return this.res
      .cookie("token", token, this.getCookieOptions())
      .status(this.defaultStatus ?? 200)
      .json({
        status: true,
        message: "Login realizado com sucesso",
        token,
        user: response.user,
      });
  }

  logout(): Response {
    return this.res
      .clearCookie("token")
      .status(this.defaultStatus ?? 200)
      .json({
        status: true,
        message: "Logout feito com sucesso",
      });
  }

  private getCookieOptions() {
    return {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 2 * 60 * 60 * 1000,
    };
  }
}
