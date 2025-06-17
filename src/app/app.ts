import express from "express";
import sequelize from "../config/db.js";
import router from "../router.js";

const app = express();

app.use(express.json());

app.use("/api", router);

sequelize
  .sync()
  .then(() => console.log("Banco de dados sincronizado com sucesso"))
  .catch((err) => console.log("Error ao sincronizar o banco de dados", err));

export default app;
