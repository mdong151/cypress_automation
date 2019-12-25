class HomePage {
    getEditNameBox() {
        return cy.get("div[class='form-group'] input[name='name']")
    }

    getGender() {
        return cy.get("#exampleFormControlSelect1")
    }

    getTwoWayDataBinding() {
        return cy.get("h4 input")
    }

    getEntrepreneur() {
        return cy.get("#inlineRadio3")
    }

    getShopTab() {
        return cy.get("[href='/angularpractice/shop']")
    }
}

export default HomePage;