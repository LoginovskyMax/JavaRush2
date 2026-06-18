import { rickResponse } from "../fixtures/responses";
/// <reference types="cypress"/>

const testId = rickResponse.results[0].id

describe('Главная страница', () => {
    it('Карточка персонажа присутствует на станице', () => {
        cy.intercept('GET', '/api/character*', {
            body: JSON.stringify(rickResponse) // Ответить данными из файла фикстуры
        }).as('getData'); // Даем перехвату псевдоним 'getPosts'

        cy.visit('/rick');

        cy.wait('@getData');

        cy.get(`[data-testid=${testId}]`).should('contain.text', `ID: ${testId}`);
   });
}
)