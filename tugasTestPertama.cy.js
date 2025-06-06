/// <reference types="cypress" />

describe('Tugas Tes Script', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')

        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
        .type('emailtest@gmail.com')
        .should('have.value','emailtest@gmail.com')
    });
});