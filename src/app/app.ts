import express from "express";
import sequelize from "../config/db.js";
import router from "../router.js";
import cors from "cors";
import corsConfig from "../config/cors.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cors(corsConfig));
app.use(cookieParser());

app.use("/api", router);

sequelize
  .sync()
  .then(() => console.log("Banco de dados sincronizado com sucesso"))
  .catch((err) => console.log("Error ao sincronizar o banco de dados", err));

export default app;
