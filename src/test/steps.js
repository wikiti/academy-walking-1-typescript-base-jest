const assert = require("assert");
const { When, Then } = require("@cucumber/cucumber");

Given(
  "I add {number} units of {string} to my shopping basket",
  function (numberOfItems, item) {
    this.shoppingBasket = new Basket(this.shoppingBasket).add(
      numberOfItems,
      item
    );
  }
);

When("I check the content of my basket", function () {
  this.contents = shoppingBasket.getContents();
});

Then(
  "it should contain the following information: {string}",
  function (expectedResponse) {
    assert.equal(this.contents, expectedResponse);
  }
);
