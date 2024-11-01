Cypress.Commands.add('chooseACoffee', (coffee) => { 
    cy.visit('/')
    cy.get(".coffee-item").should('have.length', 8 )
    cy.contains(coffee.name).parents('.coffee-item').find('.buy-coffee').click()
})

Cypress.Commands.add('fillAddress', (user) => { 
    cy.get('input[placeholder="CEP"]').type(user.cep)
    cy.get('input[value="Buscar CEP"]').click()
    cy.get('input[name="number"]').type(user.number)
    cy.get('input[name="complement"]').type(user.complement) 

})

Cypress.Commands.add('paymentMethod', (coffee) => { 
    cy.get(`input[name="paymentMethod"][value=${coffee.paymentMethod}]`).click( {force: true} )
})

Cypress.Commands.add('useCoupon', (user) => { 
    cy.get('.coupon > .sc-bqWxrE > .sc-ksBlkl').type(user.coupon)
    cy.get('.button-coupon > .sc-bqWxrE > .sc-ksBlkl').click()
    cy.get('.discount').should("be.visible")
})
Cypress.Commands.add('expiredCoupon', (user) => { 
    cy.get('.coupon > .sc-bqWxrE > .sc-ksBlkl').type(user.coupon)
    cy.get('.button-coupon > .sc-bqWxrE > .sc-ksBlkl').click()    
})
Cypress.Commands.add('confirmCoffee', (coffee) => { 
    cy.get('h1[color="subtitle"]').eq(1).should('have.text', coffee.name)
    cy.get('.subtotal > .hsQOZS').should('contain.text', coffee.price)
})
Cypress.Commands.add('submitOrder', () => { 
    cy.get('button[type="submit"]').click()
})
Cypress.Commands.add('popup', (msg) => { 
    cy.get('#swal2-html-container').should('have.text', msg)
})
Cypress.Commands.add('errorMsg', () => { 
    cy.get('.cep > .sc-ipEyDJ').should('have.text', "Informe um CEP válido")
    cy.get('.sc-gKPRtg > :nth-child(4) > .sc-ipEyDJ')
      .should('have.text', "Informe o número")
})
Cypress.Commands.add('noPayment', (msg) => { 
    cy.get('.sc-iBYQkv > .sc-ipEyDJ').should('have.text', msg)
})
Cypress.Commands.add('badCoupon', (msg) => { 
    cy.get('.coupon > .sc-ipEyDJ').should('have.text', msg)
})

