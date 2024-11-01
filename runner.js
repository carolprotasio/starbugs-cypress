const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImY3NTQzOTg5LTUyMjgtNGYzNS04ZjYyLWI2NjdhZmFiYTAzOS0xNzMwNDk1NDUyMDg2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMmMyMDJmNjMtNTgyNC00ZmViLTkyOGMtYzQzOTI4YWE0NzlkIiwidHlwZSI6InQifQ.aj4Q7Px9YpRycURMMvz0VKU0P33525VWsCvjZqTbTjo'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})