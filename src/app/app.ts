import express from "express";
import sequelize from "@src/config/db";
import router from "@src/router";
import cors from "cors";
import corsConfig from "@src/config/cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cors(corsConfig));
app.use(cookieParser());

app.use("/api", router);

sequelize.sync()
    .then(() => console.log("Banco de dados sincronizado com sucesso"))
    .catch((err) => console.log("Error ao sincronizar o banco de dados", err));

export default app;