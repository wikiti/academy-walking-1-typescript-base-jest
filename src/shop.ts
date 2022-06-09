import itemDatabase from "./db/library.json";

class Basket {
  cart: Record<string, number> = {};
  add(item: string) {
    this.cart[item] ? (this.cart[item] += 1) : (this.cart[item] = 1);
  }
}

class ItemsRepository {
  db: Record<string, any> = itemDatabase;
  get(id: string) {
    const item = this.db[id];
    return item;
  }
}

const HARDCODED_DATE = "01/01/2022";

export class Shop {
  private basket: Basket;
  private repository: ItemsRepository;

  constructor() {
    this.basket = new Basket();
    this.repository = new ItemsRepository();
  }

  addItem(item: string, quantity: number) {
    let c = quantity;
    while (c > 0) {
      this.basket.add(item);
      c--;
    }
  }

  getCart() {
    return this.basket.cart;
  }

  getContents() {
    const itemIds = Object.keys(this.basket.cart);
    let contents = HARDCODED_DATE;
    let totalCost = 0;
    for (let index in itemIds) {
      const itemId = itemIds[index];
      const item = this.repository.get(itemId);
      const quantity = this.basket.cart[itemId];
      const lineItemPrice = quantity * item.Price;
      const line = `${quantity} x ${item.Title} // ${quantity} x ${item.Price} = £${lineItemPrice}`;
      contents += "\n" + line;

      totalCost += lineItemPrice;
    }
    contents += `\nTotal: £${totalCost}`;

    return contents;
  }
}
