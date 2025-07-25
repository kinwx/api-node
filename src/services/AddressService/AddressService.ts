import AddressRepository from "../../repositories/AddressRepository/AddressRepository.js";
import { Request } from "express";

export default {
  async findAll() {
    return await AddressRepository.findAll();
  },
  async findAddressById(req: Request) {
    const { id } = req.params;

    const address = await AddressRepository.findById(id);
    if (!address) throw new Error();

    return address;
  },
  async createAddress(req: Request) {
    const { client_id, city, street, state, postal_code } = req.body;

    const address = await AddressRepository.create({
      client_id,
      city,
      street,
      state,
      postal_code,
    });

    return address;
  },
  async updateAddress(req: Request) {
    const { id } = req.params;
    const { client_id, city, street, state, postal_code } = req.body;

    const address = await AddressRepository.findById(id);
    if (!address) throw new Error();

    await address.update({ client_id, city, street, state, postal_code });

    return address.reload();
  },
  async deleteAddress(req: Request) {
    const { id } = req.params;

    const address = await AddressRepository.findById(id);
    if (!address) throw new Error();

    await address.destroy();

    return true;
  },
};
