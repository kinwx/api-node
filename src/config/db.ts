import { Dialect, Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE as string,
  process.env.DB_USERNAME as string,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION as Dialect,
    logging: false,
  }
);

try {
  sequelize.authenticate().then(() => {
    console.log("Banco de dados conectado.");
  });
} catch (error) {
  console.warn("Error ao conectar com o banco de dados.");
  console.error(error);
}

export default sequelize;
