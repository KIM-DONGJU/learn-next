declare namespace Cypress {
  interface Chainable {
    /**
    * @description data-cy로 설정된 엘리먼트를 쉽게 찾을 수 있는 커스텀 API
    * 
    */
    getByCy(text: string): Chainable<JQuery<HTMLElement>>
  }
}