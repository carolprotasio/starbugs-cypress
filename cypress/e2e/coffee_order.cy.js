/// <reference types="cypress" />

describe('/ functionality: order a coffee: ', () => {

  beforeEach(function () {
    cy.fixture('user').then(function (user) {
      this.user = user
    })
    cy.fixture('coffee').then(function (coffee) {
      this.coffee = coffee
    })
  })
  it('CT001 - should purchase a Macchiato with a coupon', function () {
    const user = this.user.order
    const coffee = this.coffee.macchiato

    cy.chooseACoffee(coffee)
    cy.fillAddress(user)
    cy.paymentMethod(coffee)
    cy.useCoupon(user)
    cy.confirmCoffee(coffee)

    cy.submitOrder()
    cy.get('h1').should('have.text', 'Uhull! Pedido confirmado')
  })
  it('CT002 - purchase a Latte without a coupon', function () {
    const user = this.user.no_coupon
    const coffee = this.coffee.latte

    cy.chooseACoffee(coffee)
    cy.fillAddress(user)
    cy.paymentMethod(coffee)    
    cy.confirmCoffee(coffee)

    cy.submitOrder()
    cy.get('h1').should('have.text', 'Uhull! Pedido confirmado')
  })
  it('CT003 - should get a unavailable coffee', function () {    
    const coffee = this.coffee.expresso_cremoso
    const msg = "Produto indisponível"

    cy.chooseACoffee(coffee)
    cy.popup(msg)   
   
  })

  context("show error messages", () => {

    it('CT004 - when purchasing without address', function () {    
      const coffee = this.coffee.macchiato   
  
      cy.chooseACoffee(coffee)
      cy.paymentMethod(coffee)
      cy.submitOrder()
      cy.errorMsg()
     
    })
    it('CT005 - when purchasing without payment method picked', function () {    
      const coffee = this.coffee.café_com_leite 
      const user = this.user.john
      const msg = "Informe o método de pagamento"
  
      cy.chooseACoffee(coffee)
      cy.fillAddress(user)       
      cy.confirmCoffee(coffee)
      cy.submitOrder()
      cy.noPayment(msg)   
    })
    it('CT006 - when purchasing a Capuccino with a expired coupon', function () {
      const user = this.user.david
      const coffee = this.coffee.capuccino
      const msg = "Cupom expirado!"
  
      cy.chooseACoffee(coffee)
      cy.fillAddress(user)
      cy.paymentMethod(coffee)
      cy.expiredCoupon(user)
      cy.confirmCoffee(coffee)    
      cy.badCoupon(msg)
     
    })
    it('CT007- when purchasing a Capuccino with a invalid coupon', function () {
      const user = this.user.george
      const coffee = this.coffee.expresso_gelado
      const msg = "Cupom inválido!"
  
      cy.chooseACoffee(coffee)
      cy.fillAddress(user)
      cy.paymentMethod(coffee)
      cy.expiredCoupon(user)
      cy.confirmCoffee(coffee)    
      cy.badCoupon(msg)
     
    })
  })


})