/// <reference types="cypress" />
describe('My First Test Suite', function () {
    it('My first test case', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.get('div.products-wrapper div.product:visible').should('have.length', 4)
        cy.get('.products').find('.product').should('have.length', 4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const productName = $el.find('.product-name').text()
            if (productName.includes('Cashews')) {
                $el.find('button').click();
            }
        })
        // const logo = cy.get('.brand').text();
        // cy.log(logo.text());
        cy.get('.brand').then(function (logolement) {
            cy.log(logolement.text())
        })
        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').should('have.length', 4)
        cy.get('@productsLocator').find('.product').should('have.length', 4).then(function(){
            console.log('ahihi')
        })
        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')
    })
})

describe('My Second Test Suite', function () {
    it('Does not do much second time testcase!', function () {
        expect(false).to.equal(false)
    })
})