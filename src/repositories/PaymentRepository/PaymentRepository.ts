import { AbstractRepository } from "@src/helpers/AbstractRepository";
import Payment, { PaymentAttributes, PaymentCreationAttributes } from "@src/models/Payment/payment";

export class PaymentRepository extends AbstractRepository<
    Payment,
    PaymentAttributes,
    PaymentCreationAttributes
> {
    constructor() {
        super(Payment);
    }
}

export default new PaymentRepository();