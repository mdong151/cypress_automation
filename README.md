# cypress_automation

# My personal notes:
1. Download node.js https://nodejs.org/en/download/
2. Locate node instal file at `C:\Program Files\nodejs`, add the path to your system environment 
3. Add NODE_HOME (value `C:\Program Files\nodejs`) to your path 
4. Create a seperated directory to work with Cypress: `C:\Users\Admin\Documents\Projects\CypressAutomation`
5. Instal visual studio code
6. Generate Package.json and Cypress dependencies, scan Package.json and download nessary dependencies

```
npm install
```


7. Open terminal, type 
```
npm init
```
--> follow instruction, Package.json will be created

8. install cypress using this command: 
```
npm install cypress --save-dev
```
--> It will install cypress and add dependencies into your `package.json`, next time you just npm install and it will understand

9. Open the test runner by 
```
node_modules\.bin\cypress open
``` 
--> after run this, bunches of new folder will be added

10. Cypress bundled with Mocha test framework

11. Mocha have 2 methods: 

- `describe` - act like test suites\n
- `it` - act like test cases\n

12. Run the test via command line: (when run in command line, Cypress always run in headless) 

- run all test: `node_modules\.bin\cypress run`
- run 1 spec file: `node_modules\.bin\cypress run --spec "cypress\integration\learnings\Test1.js"`
- run with headed mode: `node_modules\.bin\cypress run --headed --spec "cypress\integration\learnings\Test1.js"`
- run all test spec under 1 folder: `node_modules\.bin\cypress run --headed --spec "cypress\integration\learnings\*"`
- run test with chrome browser: `run --browser chrome`\n

13. Folder strucure

- `fixture` folder: to store test data, xml, excel ... user command fixture to get this data 
- `integration` folder: write test here
- `plugins` folder: handle Cypress event: listener 
- `support` folder: write util methods here, 
- `videos` folder: videos will be stored here
- `cypress.json` file: to store configuration for cypress

14. Cypress only support CSS selector

15. CSS selector guideline

```
id: #idname, tagname#idname
classname: .classname , tagname.classname
atributes: tagname[attribute='value']
travel: tagname child_tagname
```

- In chrome, use $$("") to do CSS select 

16. Add `/// <reference types="cypress" />` to add autocompletion for cy

17. Assertion: https://docs.cypress.io/guides/references/assertions.html#Chai

check size: 
```
cy.get('div.products-wrapper div.product').should(have.length, 4)
```

18. Get only visible element: 

```
cy.get('div.products-wrapper div.product:visible')
```

19. Find element child of parents element: 

```
cy.get('.products').find('.product').should('have.length', 4)
```

20. get element by index: 

```
cy.get('.products').find('.product').eq(2)
```

21. selenium is Asynchronous execution: all commands will run immediately 
- Cypress is asynchronous in nature, but they have wrapper all the methods
- Cypress have ability to queu all the commands first, then Cypress will run them in order

22. In Cypress, all the steps return `promise` - a state of a step: resolved, rejection, pending
method .then() will wait until the `promise` resolved

23. Iteration and get the element to click

```
cy.get('.products').find('.product').each(($el, index, $list) => {
            const productName = $el.find('.product-name').text()
            if (productName.includes('Cashews')) {
                $el.find('button').click();
            }
        })
```

24. Below codes snipset won't work because it is outside of cypress functions, you have to take care of the command order, the `promise` context was not use below

```
const logo = cy.get('.brand')
cy.log(logo.text());
```

Below will not work as well because text() is not cypress command, it is JQuery methods! 

```
const logo = cy.get('.brand').text();
        cy.log(logo.text());
```

Need to fix as. `then` method is to take care of `promise`

```
cy.get('.brand').then(function(logolement){
            cy.log(logolement.text())
        })
```