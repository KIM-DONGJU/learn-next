describe('first', () => {
  // 첫 번째 테스트 시나리오
  it('페이지에 진입하면 카운터 앱이 정상적으로 실행된다(0이 표시된다)', () => {
    cy.visit('http://localhost:3000');
    // get은 css 선택자를 인자로 받는데, 임의의 속성을 받기 위해선[]로 묶어야 함
    // 클래스 이름이 'my-class'인 요소 중에서 data-cy 속성이 'counter'인 요소 선택
    // cy.get('.my-class[data-cy=counter]');
    // ID가 'parent'인 요소의 자식 요소 중에서 data-cy 속성이 'child'인 요소 선택
    // cy.get('#parent [data-cy=child]');
    // https://docs.cypress.io/api/commands/contains
    cy.get('[data-cy=counter]').contains(0);
  });

})