///<reference types="Cypress" />

context('firstTest', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it('selects first occupied place and set to free', () => {

      cy.get('#parking_place_0').should('exist')
      cy.get('#parking_place_0').click()

      cy.get('[data-cy-free-button]').should('exist')
      cy.get('[data-cy-free-button]').click()  
    }) 

    it('selects first free place and set to occupied', () => {

      cy.get('#parking_place_1').should('exist')
      cy.get('#parking_place_1').click()

      cy.get('[data-cy-reserve-button]').should('exist')
      cy.get('[data-cy-reserve-button]').click()      
    }) 
})
