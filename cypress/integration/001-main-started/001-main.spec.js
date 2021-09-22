describe('메인페이지 접속하기', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('메인 타이틀 - My Baking Recipe 확인', () => {
    cy.get('.h1-home').should('have.text', 'My Baking Recipe');
  });

  it('메인 타이틀 - Sign in 확인', () => {
    cy.get('.button-header').should('have.text', 'Sign in (Google)');
  });
});
