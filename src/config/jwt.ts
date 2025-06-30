import dotenv from "dotenv";
import { PrivateKey, Secret } from "jsonwebtoken";

dotenv.config()

interface ENVInterface {
    secret: PrivateKey,
    expiresIn: any
}

export default {
    secret: process.env.JWT_SECRET!,
    expiresIn: process.env.JWT_EXPIRES_IN!
} as ENVInterface;