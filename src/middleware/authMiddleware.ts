import { NextFunction, Response, Request } from "express";
import jwt, { JwtPayload as DefaultJwtPayload } from "jsonwebtoken";
import jwtConfig from "../config/jwt.js";

interface JwtPayload extends DefaultJwtPayload {
  id: string;
  name: string;
}

export interface AuthenticatedRequest extends Request {
  user?: { id: string; name: string };
}

export default function authMiddleware(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies?.["token"];

  if (!token) {
    res.status(401).json({
      status: false,
      message: "Acesso não autorizado.",
      data: null,
    });
    return;
  }

  try {
    const decoded = jwt.verify(token, jwtConfig.secret!) as JwtPayload;

    req.user = {
      id: decoded.id,
      name: decoded.name,
    };

    next();
  } catch (error) {
    res.status(401).json({
      status: false,
      message: "Token inválido ou expirado.",
      data: null,
    });

    return;
  }
}
