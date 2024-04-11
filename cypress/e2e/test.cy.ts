describe('template spec', () => {
  before('visit', () => {
    cy.visit('/')
  })
  it('test login', () => {
    cy.get('#login').click()
    cy.get('#email').click().type('exleonardo@mail.ru')
    cy.get('#password').click().type('1234')
    cy.get('#rememberMe').click().get('[data-state="checked"]')

    cy.get('#signIn').click()
  })
})
