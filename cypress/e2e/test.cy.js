/// <reference types="cypress"/>


describe('US-01-Funcionalidade: Buscar filme', () => {
  it('Deve buscar filme', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-input').type('Interstellar')
    cy.get('#search-button').click()
  })
})