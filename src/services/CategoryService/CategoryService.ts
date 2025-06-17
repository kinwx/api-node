import CategoryRepository from "@src/repositories/CategoryRepository/CategoryRepository";
import { Request } from "express";

export default {
  findAll() {
    const categories = CategoryRepository.findAll();

    return categories;
  },
  findCategoryById(req: Request) {
    const { id } = req.params;

    const category = CategoryRepository.findById(id);
    if (!category) throw new Error();

    return category;
  },
  async createCategory(req: Request) {
    const { name } = req.body;

    const category = CategoryRepository.create({ name });

    return category;
  },
  async updateCategory(req: Request) {
    const { id } = req.params;
    const { name } = req.body;

    const category = await CategoryRepository.findById(id);
    if (!category) throw new Error();

    await category.update({ name });

    return category;
  },
  async deleteCategory(req: Request) {
    const { id } = req.params;

    const category = await CategoryRepository.findById(id);
    if (!category) throw new Error();

    await category.destroy();

    return true;
  },
};
