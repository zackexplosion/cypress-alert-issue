describe('alert will hold page load', function() {
  it('forever', function() {
    cy.visit('http://127.0.0.1:8080')

    cy.get('#_form_aiochk').submit()
  })
})