describe('HuntingPony', () => {
    
    it('Оформление заказа', () => {
        cy.visit('https://huntingpony.com/');
        cy.get('#splide02-slide01 > .product-preview > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click()
        cy.get('.add-cart-counter__btn-label').click();
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.get('.add-cart-counter__detail-dop-text').click();
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа').should('be.visible');
         })


})