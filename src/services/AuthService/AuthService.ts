import UserRepository from "@src/repositories/UserRepository/UserRepository";
import { Request } from "express";
import bcrypt from "bcrypt";
import { AuthenticatedRequest } from "@src/middleware/authMiddleware";

export default {
    async store(req: Request) {
        const { name, email, password } = req.body;

        const hash = await bcrypt.hash(password, 10)
        await UserRepository.create({ name, email, password: hash })

        return true;
    },
    async login(req: Request) {
        const { email, password } = req.body;

        const user = await UserRepository.findByEmail(email)

        if (!user)
            throw new Error("usuário não encontrado");

        const allowedPassword = bcrypt.compare(password, user.password);
        if (!allowedPassword)
            throw new Error("Credencias Inválidas");

        return { user };
    },
    async user(req: AuthenticatedRequest) {
        const userId = req.user.id;

        const user = await UserRepository.findById(userId);
        if (!user)
            throw new Error("usuário não encontrado")

        return user;
    }
};
