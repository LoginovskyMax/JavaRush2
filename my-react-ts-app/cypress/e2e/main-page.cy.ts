/// <reference types="cypress"/>

describe('Главная страница', () => {
    beforeEach(() => {
     cy.visit('/');
    })

   it('успешно загружается и содержит приветствие', () => {
     cy.get('[data-testid=title]').should('contain.text', 'Заголовок сайта');
   });

   it('успешно открывается модалка', () => {
     cy.get('[data-testid=toggle-btn]').click();
     cy.get('[data-testid=header-modal]').should('be.visible');
   });

    it('успешно переходит на страницу Rick', () => {
     cy.get('[data-testid=rick-page-btn]').click();

     cy.url().should('include', '/rick');
     cy.get('h1').should('contain.text', 'Rick page');
   });
});