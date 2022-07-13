/// <reference types="cypress" />


describe("login app", () => {
    it("my first test", () => {
        cy.visit('https://react-redux.realworld.io/')
        cy.contains('Sign in').should('have.text', 'Sign in')
        cy.contains('Sign in').click()  
        cy.get(':nth-child(1) > .form-control').type('oshar2008@gmail.com')
        cy.get(':nth-child(2) > .form-control').type('19561994')
        cy.get('.btn').click()
        cy.get(':nth-child(4) > .nav-link').click()
        cy.get('.col-xs-12 > .btn').click()
        cy.get('.btn-outline-danger').click()
    })
 
})