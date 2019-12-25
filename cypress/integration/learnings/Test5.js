/// <reference types="cypress" />

describe('Test suites no. 5', function () {
    it('test case no. 1', function () {
        cy.visit('http://www.qaclickacademy.com/practice.php')
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'qaclickacademy.com')
    })

    it('test case no. 2', function () {
        cy.visit('http://www.qaclickacademy.com/practice.php')
        cy.get("#product tr td:nth-child(2)").each(($el, index, $list) => {
            const text = $el.text()
            if (text.includes('Python')) {
                cy.get("#product tr td:nth-child(2)").eq(index).next().then(function (price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })

        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()

        cy.get('#opentab').then(function ($el) {
            const url = $el.prop('href')
            cy.visit(url)
        })

    })
})