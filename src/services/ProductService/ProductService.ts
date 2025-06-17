import ProductRepository from "@src/repositories/ProductRepository/ProductRepository";
import { Request } from "express";

export default {
  findAll() {
    const products = ProductRepository.findAll();

    return products;
  },
  findProductById(req: Request) {
    const { id } = req.params;

    const product = ProductRepository.findById(id);
    if (!product) throw new Error();

    return product;
  },
  async createProduct(req: Request) {
    const { name, price, storage, category_id } = req.body;

    const product = ProductRepository.create({
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

    return product;
  },
  async deleteProduct(req: Request) {
    const { id } = req.params;

    const product = await ProductRepository.findById(id);
    if (!product) throw new Error();

    await product.destroy();

    return true;
  },
};
