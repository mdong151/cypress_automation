describe('My First Test Suite', function () {
    it('My first test case', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    })
})

describe('My Second Test Suite', function () {
    it('Does not do much second time testcase!', function () {
        expect(false).to.equal(false)
    })
})