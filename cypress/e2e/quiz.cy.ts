
describe('Quiz Component - End-to-End Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001'); // Adjust path based on your app structure
    });
  
    it('should start the quiz when the start button is clicked', () => {
      cy.get('button').contains('Start Quiz').click();
      cy.get('h2').should('be.visible');
      cy.get('h2').invoke('text').should('not.be.empty');
    });

      // Answer each question
      it('should present the next question when an answer is selected', () => {
      cy.get('button').contains('Start Quiz').click();
      cy.get('h2').should('be.visible');  
      cy.get('button').first().click();
      cy.get('h2').should('be.visible').and('not.be.empty');
      });

      // Verify score is shown
      it('should show the score when the quiz is over', () => {
        cy.get('button').contains('Start Quiz').click();
        for(let i = 0; i < 10; i++){
          cy.get('button').first().click();
        }
        cy.get('h2').contains('Quiz Completed').should('be.visible');
        cy.get('div').contains('Your score').should('be.visible');
      });
  
      // Restart quiz
      it('should allow starting a new quiz after the quiz ends', () => {
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
  