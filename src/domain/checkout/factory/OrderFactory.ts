import { Order } from "../entity/order";
import { OrderItem } from "../entity/order_item";

type OrderProps = {
  id: string;
  customerId: string;
  items: {
    id: string;
    name: string;
    productId: string;
    quantity: number;
    price: number;
  }[];
};

export class OrderFactory {
  public static create(orderProps: OrderProps): Order {
    const orderItems = orderProps.items.map(
      (item) =>
        new OrderItem(
          item.id,
          item.name,
          item.price,
          item.productId,
          item.quantity
        )
    );

    const order = new Order(orderProps.id, orderProps.customerId, orderItems);
    return order;
  }
}
