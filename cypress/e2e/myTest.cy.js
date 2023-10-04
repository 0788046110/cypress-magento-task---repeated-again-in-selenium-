/// <reference types= "cypress" />
describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
   
    const ch = "In stock";
    let selectItem = ["Men", "Women"]; //,"Gear"
    let selectItemRandomly = Math.floor(Math.random() * selectItem.length);
    cy.contains(selectItem[selectItemRandomly]).click();
    cy.get("div.products-grid.grid")
      .find("div.product-item-info")
      .eq(1)
      .click();
    let checkInOrOut = cy
      .get("div.stock.available")
      .invoke("text")
      .should("contain", ch); //تاكد انها in stock
    cy.get("div.swatch-attribute-options.clearfix")
      .find("div.swatch-option.text")
      .eq(0)
      .click(); //للحجم
    cy.get("div.swatch-attribute-options.clearfix")
      .find("div.swatch-option.color")
      .eq(0)
      .click(); //للون
    if (checkInOrOut) {
      cy.get("#product-addtocart-button").click();
    }
  });
});
