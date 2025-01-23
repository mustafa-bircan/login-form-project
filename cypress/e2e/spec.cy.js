import { should } from "chai";

describe('Login Form', () => {
    it('Başarılı form doldurulduğunda submit edebiliyorum.', () => {
      cy.visit('http://localhost:5177/');

      cy.get('[data-cy="email-input"]').type('erdem.guntay@wit.com.tr'); 
      cy.get('[data-cy="password-input"]').type('9fxIH0GXesEwH_I');
      cy.get('[data-cy="check-checkbox"]').check();
      cy.get('[data-cy="submit-button"]').should('not.be.disabled').click(); 

      cy.url().should('include','/success');
    });

    it('Geçersiz e-posta adresi girildiğinde hata mesajı gösterilmeli.', () => {
      cy.visit('http://localhost:5177/');

      cy.get('[data-cy="email-input"]').type('erdem.guntay@wit')
      cy.get('[data-cy="submit-button"]').should('be.disabled');
      cy.get('[data-cy="error-message"]').should('contain.text','Please enter a valid email address');
    });


    
});

    