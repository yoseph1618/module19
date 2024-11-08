import React from 'react';
import Quiz from '../../client/src/components/Quiz';
import '@testing-library/cypress/add-commands';
import { mount } from 'cypress/react18';

describe('Quiz Component - Component Test', () => {
    beforeEach(() => {
      // Mount the quiz component before each test
    });
  
    it('should start the quiz when the start button is clicked', () => {
      mount(<Quiz />);
      cy.get('button').contains('Start Quiz').click();
      cy.get('h2').should('be.visible');
      cy.get('h2').invoke('text').should('not.be.empty');
    });
  
    it('should present the next question when an answer is selected', () => {
      mount(<Quiz />);
      cy.get('button').contains('Start Quiz').click();
      cy.get('h2').should('be.visible');
      cy.get('button').first().click();
      cy.get('h2').should('be.visible').and('not.be.empty');
    });
  
    it('should show the score when the quiz is over', () => {
      mount(<Quiz />);
      cy.get('button').contains('Start Quiz').click();
      for(let i = 0; i < 10; i++){
        cy.get('button').first().click();
      }
      cy.get('h2').contains('Quiz Completed').should('be.visible');
      cy.get('div').contains('Your score').should('be.visible');
    });
  
    it('should allow starting a new quiz after the quiz ends', () => {
      mount(<Quiz />);
      cy.get('button').contains('Start Quiz').click();
      for(let i = 0; i < 10; i++){
        cy.get('button').first().click();
      }
      cy.get('h2').contains('Quiz Completed').should('be.visible');
      cy.get('button').contains('Take New Quiz').click();
      cy.get('h2').should('not.contain', 'Quiz Completed');
      cy.get('h2').should('be.visible').and('not.be.empty');
    });
});
