///<reference types="Cypress" />

context('firstTest', () => {
    beforeEach(() => {
      cy.visit('127.0.0.1:8080')
    })

    it('my first test', () => {
    //cy.visit('https://one-parking-place.appspot.com/')
    //cy.contains('Preview')
    }) 
})
