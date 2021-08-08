import IPaymentMethod from '../../models/payment-method.model';

export default class MasterCard implements IPaymentMethod {
  get comission(): number {
    return 0.04;
  }
}
