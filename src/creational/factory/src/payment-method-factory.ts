import IPaymentMethod from '../models/payment-method.model';
import PaymentType from '../models/payment-type.model';
import MasterCard from './class/master-card.class';
import Paypal from './class/paypal.class';
import Visa from './class/visa.class';

export default class PaymentMethodFactory {
  public static createPaymentType(type: PaymentType): IPaymentMethod {
    if (type === PaymentType.Mastercard) {
      return new MasterCard();
    }

    if (type === PaymentType.PayPal) {
      return new Paypal();
    }

    if (type === PaymentType.Visa) {
      return new Visa();
    }

    throw new Error('Invalid payment method type.');
  }
}
