/// <reference types="cypress"/>

describe('Страниа формы входа', () => {
     it('успешно аутентифицирует пользователя с правильными данными', () => {
        cy.visit('/auth'); // 1 Посещаем страницу

        cy.get('h1').should('contain.text', 'Auth page')
       // 2 Находим поля и вводим данные
         cy.get('input[name="name"]').type('testuser');
         cy.get('input[name="age"]').type('25');
         cy.get('input[name="email"]').type('alice@mail.com');
        // 3 Находим кнопку отправки и кликаем
        cy.get('button[type="submit"]').click();
        // 4 Проверяем результат
        cy.url().should('include', '/'); // Проверяем редирект
        cy.contains('Заголовок сайта').should('be.visible');
});
});