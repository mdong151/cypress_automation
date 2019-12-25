/// <reference types="cypress" />

describe('Test suites no. 6', function () {

    before(function () {
        //run once before all tests in the block
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('Test case no. 1', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get("div[class='form-group'] input[name='name']").type(this.data.name)
        cy.get("select").select(this.data.gender)
        cy.get("h4 input[name='name']").should('have.value', this.data.name)
        cy.get("div[class='form-group'] input[name='name']").should('have.attr', 'minlength', '2')
        cy.get("input[value='option3']").should('be.disabled')
        cy.get("[href='/angularpractice/shop']").click()
        this.data.productName.forEach(function (product) {
            cy.addProduct(product)
        })

    })
})