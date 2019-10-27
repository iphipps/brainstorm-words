describe('Load the page, type some text and submit', function() {
  before(()=>{
    cy.visit('http://127.0.0.1:8080/');
  })
  it('Does not do much!', function() {
    cy.get('input').type('abc');
    cy.get('form').submit();
    cy.get('ul li');

  })
})
