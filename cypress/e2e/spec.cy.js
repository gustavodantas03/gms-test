/// <reference types="cypress"/>


describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Gustavo')
    cy.get('#signup-lastname').type('Sousa')
    cy.get('#signup-email').type('gustavo03@testes.com')
    cy.get('#signup-phone').type('85989755527')
    cy.get('#signup-password').type('Teste@2024')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso')
  })

  it()
})