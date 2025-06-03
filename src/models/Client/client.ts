import { DataTypes } from "sequelize";
import sequelize from "@src/config/db";

const client = sequelize.define("client", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,

    },
    phone: {
        type: DataTypes.STRING(15),
    },
}, {
    tableName: "clients",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
});

export default client;