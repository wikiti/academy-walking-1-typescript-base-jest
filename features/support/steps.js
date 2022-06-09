const assert = require("assert");
const { When, Then, Given } = require("@cucumber/cucumber");
const { Shop } = require("../../src/shop");

const ID_MAP = {
  "The Hobbit": "10002",
  "Breaking Bad": "20110",
};
Given(
  "I add {int} units of {string} to my shopping basket",
  function (numberOfItems, item) {
    if (!this.shop) {
      this.shop = new Shop();
    }
    this.shop.addItem(ID_MAP[item], numberOfItems);
  }
);

Given("I add {int} units of {string}", function (numberOfItems, item) {
  if (!this.shop) {
    this.shop = new Shop();
  }
  this.shop.addItem(ID_MAP[item], numberOfItems);
});

When("I check the content of my shopping basket", function () {
  this.contents = this.shop.getContents();
});

Then("it should contain the following information:", function (docString) {
  assert.equal(this.contents, docString);
});
