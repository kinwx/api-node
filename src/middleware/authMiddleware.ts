import jwt from "jsonwebtoken";
import jwtConfig from "@src/config/jwt.js";
import { NextFunction, Request, Response } from "express";

export interface AuthenticatedRequest extends Request {
    user: {
        id: string;
    };
}

export default function authMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const token = req.cookies['token'];

    if (!token)
        return res.status(401).json({ message: "Acesso não autorizado." });

    jwt.verify(token, jwtConfig.secret!, (err, decoded) => {
        if (err)
            return res.status(401).json({ message: "Token Inválido ou Expirado" });

        req.user = decoded;

        next();
    });
}