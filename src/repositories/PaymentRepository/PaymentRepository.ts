import { AbstractRepository } from "../../helpers/AbstractRepository/index.js";
import Payment, {
  PaymentAttributes,
  PaymentCreationAttributes,
} from "../../models/Payment/payment.js";

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
