/// <reference types="cypress" />

describe('Browser actions', () => {
    it('Should load correct url', () => {
        cy.visit('https://example.com/', {timeout: 10000})
    });

    it('Should check correct url', () => {
        cy.url().should('include', 'example.com')
    });
});