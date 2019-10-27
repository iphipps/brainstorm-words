describe('Load the page, type some text and submit', function() {
  before(() => {
    cy.visit('http://127.0.0.1:8080/');
  });
  it('Should reset the field after submit', () => {
    cy.get('input').type('abc');
    cy.get('form').submit();
  });
});
