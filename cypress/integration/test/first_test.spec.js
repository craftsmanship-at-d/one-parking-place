///<reference types="Cypress" />

context('firstTest', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it('select first place and set to free', () => {
      cy.visit('http://localhost:3000')
      cy.get('#root > div > div.MuiBox-root.MuiBox-root-40 > div > div:nth-child(1) > div.MuiBox-root.MuiBox-root-191 > div > div > svg').should('exist')
      cy.get('#root > div > div.MuiBox-root.MuiBox-root-40 > div > div:nth-child(1) > div.MuiBox-root.MuiBox-root-191 > div > div > svg').click()
      
    }) 
})
