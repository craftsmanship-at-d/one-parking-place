///<reference types="Cypress" />

import { array } from "prop-types"

context('firstTest', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it('select first place and set to free', () => {
      cy.visit('http://localhost:3000')
      cy.get('div.MuiBox-root.MuiBox-root-40 > div > div:nth-child(1) [data-cy-occupied-place]').should('exist')
     cy.get('div.MuiBox-root.MuiBox-root-40 > div > div:nth-child(1) [data-cy-occupied-place]').click()
      

      cy.get('[data-cy-free-button]').should('exist')
      cy.get('[data-cy-free-button]').click()      
    }) 
})
