describe("Macbook Tests for Landing Page", () => {
    it("macbook-15", () => {
      cy.viewport('macbook-15');
      cy.visit("http://172.25.55.129:8080/");
    });
    it("macbook-13", () => {
        cy.viewport('macbook-13');
        cy.visit("http://172.25.55.129:8080/");
    });
    it("macbook-11", () => {
        cy.viewport('macbook-11');
        cy.visit("http://172.25.55.129:8080/");
    });
  });
  

describe("Ipad Tests for Landing Page", () => {
    it("ipad-2", () => {
        cy.viewport('ipad-2');
        cy.visit("http://172.25.55.129:8080/");
    });
    it("ipad-mini", () => {
        cy.viewport('ipad-mini');
        cy.visit("http://172.25.55.129:8080/");
    });
});

describe("iphone Tests for Landing Page", () => {
    it("iphone-6+", () => {
        cy.viewport('iphone-6+');
        cy.visit("http://172.25.55.129:8080/");
    });
    it("iphone-6", () => {
        cy.viewport('iphone-6');
        cy.visit("http://172.25.55.129:8080/");
    });
});
  