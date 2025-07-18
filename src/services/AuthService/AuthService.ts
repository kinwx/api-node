import UserRepository from "../../repositories/UserRepository/UserRepository.js";
import { Request } from "express";
import bcrypt from "bcrypt";
import { AuthenticatedRequest } from "../../middleware/authMiddleware.js";
import { FindAttributeOptions } from "sequelize";

export default {
  async store(req: Request) {
    const { name, email, password } = req.body;
    const existUser = await UserRepository.findByEmail(email);
    if (existUser)
      throw { message: "E-mail indiponível.", status: 403 }

    const hash = await bcrypt.hash(password, 10);
    const { password: _, ...user } = (await UserRepository.create({ name, email, password: hash })).dataValues;

    return user;
  },
  async login(req: Request) {
    const { email, password } = req.body;

    const user = await UserRepository.findByEmail(email);

    if (!user) throw new Error("usuário não encontrado");

    const allowedPassword = bcrypt.compare(password, user.password);
    if (!allowedPassword) throw new Error("Credencias Inválidas");

    return { user };
  },
  async user(req: AuthenticatedRequest) {
    const userId = req?.user?.id;
    if (!userId) throw new Error("Identificador do usuário não encontrado.");

    const user = await UserRepository.findById(userId);
    if (!user) throw new Error("Usuário não encontrado.");

    return user;
  },
};
