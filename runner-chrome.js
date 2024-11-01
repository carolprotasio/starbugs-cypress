const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImY3NTQzOTg5LTUyMjgtNGYzNS04ZjYyLWI2NjdhZmFiYTAzOS0xNzMwNDk4MzcwNDQyIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiN2JiODAwYzYtMWYyNC00ZTY3LTg0NGUtZmVjNjNhMDAyNTNiIiwidHlwZSI6InQifQ.GJN-nl4XIGdJ5dtv7n4GPxkcY3EWery9oqIXd2Ze7Qw'


cypress.run({
  browser: 'chrome'
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