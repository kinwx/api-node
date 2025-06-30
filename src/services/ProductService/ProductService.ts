import ProductRepository from "@src/repositories/ProductRepository/ProductRepository";
import { Request } from "express";

export default {
  async findAll() {
    return await ProductRepository.findAll();
  },
  async findProductById(req: Request) {
    const { id } = req.params;

    const product = await ProductRepository.findById(id);
    if (!product) throw new Error();

    return product;
  },
  async createProduct(req: Request) {
    const { name, price, storage, category_id } = req.body;

    const product = await ProductRepository.create({
      name,
      price,
      storage,
      category_id,
    });

    return product;
  },
  async updateProduct(req: Request) {
    const { id } = req.params;
    const { name, price, storage, category_id } = req.body;

    const product = await ProductRepository.findById(id);
    if (!product) throw new Error();

    await product.update({ name, price, storage, category_id });

    return product.reload();
  },
  async deleteProduct(req: Request) {
    const { id } = req.params;

    const product = await ProductRepository.findById(id);
    if (!product) throw new Error();

    await product.destroy();

    return true;
  },
};
