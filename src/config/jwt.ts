import dotenv from "dotenv";
import { Secret } from "jsonwebtoken";

dotenv.config()

interface ENVInterface {
    secret: Secret,
    expiresIn: any
}

export default {
    secret: process.env.JWT_SECRET!,
    expiresIn: process.env.JWT_EXPIRES_IN!
} as ENVInterface;