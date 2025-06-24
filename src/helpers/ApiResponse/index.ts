import User from "@src/models/User/User";
import { Response } from "express";
import jwt from "jsonwebtoken";
import jwtConfig from "@src/config/jwt";


export class ApiResponse {
    response!: Response;
    status!: number | undefined;
    constructor(res: Response, status?: number) {
        this.response = res;
        this.status = status;
    }

    success(response: any, message: string = "Sucesso"): any {
        return this.response.status(this.status ?? 200).json({ message, response, status: true })
    }
    error(message: string = "Error"): any {
        return this.response.status(this.status ?? 500).json({ message, response: null, status: false })
    }

    login(response: { user: User }) {
        const token = jwt.sign({ id: response.user.id, name: response.user.name }, jwtConfig.secret!, { expiresIn: jwtConfig.expiresIn });

        return this.response.cookie("token", token, {
            httpOnly: true,
            secure: false,
            maxAge: 7200000
        });
    }
    logout() {
        this.response.clearCookie('token');

        return this.response.json({ message: "Logout Feito com Sucesso." });
    }
}