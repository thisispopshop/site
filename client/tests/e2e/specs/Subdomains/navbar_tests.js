describe("Test Subdomain Navigation", () => {
    it("Mobile Switch", () => {
      cy.viewport("iphone-6");
      cy.visit("http://172.25.55.129:8080/home");
      cy.get('.navbar-burger');
    });
  });
  