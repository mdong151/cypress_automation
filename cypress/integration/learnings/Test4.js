/// <reference types="cypress" />

describe('Test suite No. 4', function () {
    it('Test case No.1', function () {
        cy.visit('http://www.qaclickacademy.com/practice.php')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click();

        //window:alert
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        cy.get('#opentab').invoke('removeAttr', 'target').click()
    })
})