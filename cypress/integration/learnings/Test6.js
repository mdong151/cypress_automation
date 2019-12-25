/// <reference types="cypress" />
import HomePage from '../pageObjects/HomePage'

describe('Test suites no. 6', function () {

    before(function () {
        //run once before all tests in the block
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('Test case no. 1', function () {
        const homePage = new HomePage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.getEditNameBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditNameBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneur().should('be.disabled')
        homePage.getShopTab().click()
        this.data.productName.forEach(function (product) {
            cy.addProduct(product)
        })

    })
})