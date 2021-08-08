import IPaymentMethod from './models/payment-method.model';
import PaymentType from './models/payment-type.model';
import PaymentMethodFactory from './src/payment-method-factory';

export default class Order {
  public paymentType?: IPaymentMethod;
  public comission: number = 0;

  constructor(private type: PaymentType, public amount: number) {}

  public create(): void {
    this.paymentType = PaymentMethodFactory.createPaymentType(this.type);

    this.comission = this.paymentType.comission * this.amount;
  }
}
