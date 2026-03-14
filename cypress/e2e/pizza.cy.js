//  inputa bir metin giren test
//  birden fazla malzeme seçilebilen bir test
//  formu gönderen bir test

describe("Iteration1 Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="hero-order-link"]').click();
  });

  it("Opening order page", () => {
    cy.contains("SİPARİŞ VER");
  });

  it("Input testing", () => {
    cy.get('[data-cy="username-input"]')
      .type("Ömer")
      .should("have.value", "Ömer");
  });

  it("Selecting ingredients", () => {
    cy.get('[type="checkbox"]')
      .check(["Pepperoni", "Sosis", "Mısır", "Sucuk"])
      .should("be.checked");
  });

  it("Submitting Form", () => {
    cy.get('[type="radio"]').check(["Orta"]);
    cy.get('[data-cy="dough-select"]').select("ince");
    cy.get('[type="checkbox"]').check(["Pepperoni", "Sosis", "Mısır", "Sucuk"]);
    cy.get('[data-cy="username-input"]').type("Ömer");
    cy.get('[data-cy="order-note"]').type("Lütfen zili çalmayın!");
    cy.get('[data-cy="order-btn"]').click();

    cy.contains("TEBRİKLER!");
  });
});
