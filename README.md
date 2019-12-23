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

`describe` - act like test suites\n
`it` - act like test cases\n

12. Run the test via command line: (when run in command line, Cypress always run in headless) 

run all test: `node_modules\.bin\cypress run`
run 1 spec file: `node_modules\.bin\cypress run --spec "cypress\integration\learnings\Test1.js"`\n
run with headed mode: `node_modules\.bin\cypress run --headed --spec "cypress\integration\learnings\Test1.js"`\n
run all test spec under 1 folder: `node_modules\.bin\cypress run --headed --spec "cypress\integration\learnings\*"`\n
run test with chrome browser: `run --browser chrome`\n

13. Folder strucure

`fixture` folder: to store test data, xml, excel ... user command fixture to get this data \n
`integration` folder: write test here\n
`plugins` folder: handle Cypress event: listener \n
`support` folder: write util methods here, \n
`videos` folder: videos will be stored here \n
`cypress.json` file: to store configuration for cypress \n

14. Cypress only support CSS selector

15. CSS selector guideline

```
id: #idname, tagname#idname
classname: .classname , tagname.classname
atributes: tagname[attribute='value']
travel: tagname child_tagname
in chrome, use $$("") to do CSS select 
```

16. Add `/// <reference types="cypress" />` to add autocompletion for cy

17. Assertion: https://docs.cypress.io/guides/references/assertions.html#Chai
check size: 
```
cy.get('div.products-wrapper div.product').should(have.length, 4)
```

18. find only visible element: 

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

23. iteration and get the element to click

```
cy.get('.products').find('.product').each(($el, index, $list) => {
            const productName = $el.find('.product-name').text()
            if (productName.includes('Cashews')) {
                $el.find('button').click();
            }
        })
```

24. 