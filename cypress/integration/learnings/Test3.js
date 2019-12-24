/// <reference types="cypress" />

describe('Test suites no 3', function () {
    it('Test case no 1', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get("input[type='checkbox']").check(['option2', 'option3'])

        //static dropdown
        cy.get("select").select('option2').should('have.value', 'option2')
        //dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item').each(($el, index, $list) => {
            if ($el.text() === "Indonesia") {
                $el.click();
            }
        })
        cy.get('#autocomplete').should('have.value', 'Indonesia')
        //visibility check on edit box
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })
})