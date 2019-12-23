/// <reference types="cypress" />

describe('Test2 - Checkout suites', function () {
    it('Check out cart', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('productsLocator').find('.product').as('productLocator').should('have.length', 4)
        cy.get('@productLocator').each(($el, index, $list) => {
            const productName = $el.find('.product-name').text()
            if (productName.includes('Cashews')) {
                $el.find('button').click()
            }
        })
        cy.get('.cart-icon > img').click();
        // cy.get(".cart-preview [type='button']").click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.wait(2000)
    })
})