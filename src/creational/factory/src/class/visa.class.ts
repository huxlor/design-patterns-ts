import IPaymentMethod from '../../models/payment-method.model';

export default class Visa implements IPaymentMethod {
  get comission(): number {
    return 0.06;
  }
}
