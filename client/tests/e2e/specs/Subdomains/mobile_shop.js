describe("Macbook Tests for Shopping Page", () => {
    it("macbook-15", () => {
      cy.viewport('macbook-15');
      cy.visit("http://172.25.55.129:8080/shop");
    });
    it("macbook-13", () => {
        cy.viewport('macbook-13');
        cy.visit("http://172.25.55.129:8080/shop");
    });
    it("macbook-11", () => {
        cy.viewport('macbook-11');
        cy.visit("http://172.25.55.129:8080/shop");
    });
});