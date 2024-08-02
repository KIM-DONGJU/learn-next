import { THREE_PRODUCT_ITEMS } from "../fixtures";

describe('상품 페이지', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // 첫 번째 페이지 시나리오
  it('페이지에 진입하면 상품 목록이 표시된다', () => {
    // 처음 개발하는 과정에서 실패 케이스에 대한 테스트를 먼저 작성하고 추후 기능을 붙이면 be.visible로 변경하는게 TDD
    // 캡틴판교는 TDD를 비추천 -> 현실적으로 시간이 부족
    // cy.getByCy('product-item').should('not.be.visible');
    cy.getByCy('product-item').should('be.visible');
  });

  it('상단 네이게이션바의 장바구니 링크를 클릭하면 장바구니 페이지로 이동한다', () => {
    // prepare - 준비
    // cy.visit('/'); -> beforeEach에서 처리

    // action - 인터랙션
    cy.getByCy('cart-link').click();

    // assertion - 보장(검증)
    cy.url().should('include', '/cart');
    // 아래 assertion이 위 assertion을 커버함 -> 하나만 있어도 충분(사람들마다 생각이 다를 순 있음)
    // 개인적으로는 url이 의도한 url로 변경되었는지도 충분히 따로 검증할 필요가 있다고 생각이 됨
    cy.getByCy('cart-header').should('be.visible');
  });

  // 세 번째 테스트 시나리오
  it('상품 목록에 아이템을 클릭하면 상품 상세 페이지로 이동한다', () => {
    // prepare - 준비
    // cy.visit('/'); -> beforeEach에서 처리

    // action - 인터랙션
    cy.getByCy('product-item').first().click();

    // assertion - 보장(검증)
    cy.getByCy('product-info').should('be.visible');
  });

	it('상품 목록이 3개면 화면에 3개 상품이 추가된다', () => {
		// intercept 이후에 visit이 있어야함 (페이지 진입 전 네트워크 레벨에 있어야 진입 하는 시점에 바로 불러오는 네트워크 시점에 intercept가 적용되어야 함)
		// beforeEach에 있지만 편법처럼 한 번 더 visit을 하게 사용
		cy.intercept('http://localhost:4000/products', THREE_PRODUCT_ITEMS).as('getProducts');
		cy.visit('/');
		// cy.wait('5000') 처럼 임의의 시간을 정할 수는 있으나 네트워크 환경에 따라 다 다르기 때문에 공식적으로 비추(안티패턴)
		// 아래와 같이 별칭으로 사용
		cy.wait('@getProducts');

		// assertion
		cy.getByCy('product-item').should('have.length', 3);
	});
});