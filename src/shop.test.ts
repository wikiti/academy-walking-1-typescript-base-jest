import { Shop } from "./shop";

describe("Shop", () => {
  let shop: Shop;
  beforeEach(() => {
    shop = new Shop();
  });

  test("Given I add the Hobbit, should have the item within the cart", () => {
    shop.addItem("foo", 1);
    expect(shop.getCart()).toEqual({
      foo: 1,
    });
  });

  test("Given I add an item twice, it should have two items in the cart", () => {
    shop.addItem("foo", 1);
    shop.addItem("foo", 1);
    expect(shop.getCart()).toEqual({
      foo: 2,
    });
  });

  test("Given I add two of the same item at once", () => {
    shop.addItem("foo", 1);
    shop.addItem("bar", 1);
    expect(shop.getCart()).toEqual({
      foo: 1,
      bar: 1,
    });
  });

  test("Given I add an item and show the contents, it should display the cart information", () => {
    shop.addItem("10001", 1);
    expect(shop.getContents()).toEqual(
      `01/01/2022
1 x The Lord of the Rings // 1 x 10 = £10
Total: £10`
    );
  });
});
