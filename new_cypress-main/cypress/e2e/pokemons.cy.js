describe('Автотест на покупку нового аватара для тренера покемонов', function () {
     it('Покупка аватара', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get('a.auth__social > .auth__social-icon').should('be.visible');
        cy.get('#telegram-login-qa_studio_pokemon_prod_bot').should('be.visible');
        cy.get('.k_show_500').should('be.visible');
        cy.get('.auth__restore').should('be.visible');
        cy.get('.auth__form > .auth__text').should('be.visible');
        cy.get('.auth__button').should('be.visible');
        cy.get(':nth-child(1) > .auth__input').type('duke.ekaterina@gmail.com');
        cy.get('#password').type('pokemonsPassword3113');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(2) > .shop__button').click();
        cy.get('.payment__info-button-v2').should('be.visible');
        cy.get('.pay__comeback-button').should('be.visible');
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4085481609022696');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('IVANOV IVAN');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.contains('Покупка прошла успешно').should('be.visible');
        cy.get('.payment__info-button-v2').should('be.visible');
        cy.get('.payment__adv').should('be.visible')
     })


})