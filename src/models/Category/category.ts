import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../../config/db.js";

export interface CategoryAttributes {
  id: number;
  name: string;
}

export interface CategoryCreationAttributes
  extends Optional<CategoryAttributes, "id"> {}

export class Category
  extends Model<CategoryAttributes, CategoryCreationAttributes>
  implements CategoryAttributes
{
  public id!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Category",
    tableName: "categories",
    timestamps: true,
  }
);

export default Category;
