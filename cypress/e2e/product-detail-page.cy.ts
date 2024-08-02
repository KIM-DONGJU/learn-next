import { ALERT_MESSAGE } from "@/components/product-detail/ProductInfo";

describe('상품 상세 페이지', () => {
    beforeEach(() => {
        cy.visit('/products/0');
    });

    // 첫 번째 테스트 코드
    it('상품 상세 페이지로 진입하면 상품의 이름과 가격이 정상적으로 표시된다.', () => {
        // assertion
        cy.getByCy('product-image').should('be.visible');
        cy.getByCy('product-name').should('be.visible');
        cy.getByCy('product-price').should('be.visible');
    });

    it('장바구니에 담기 버튼을 클릭하면 "장바구니에 담김"이 표시된다', () => {
        const stub = cy.stub();
        cy.on('window:alert', stub);

        // action
        // then에서 parameter로 element를 받을 수 있음
        cy.getByCy('add-cart-button').click().then(() => {
            // 추가 설정이 필요함 -> 따로 서칭 필요
            // expect(stub.getCall(0)).to.be.calledWith(ALERT_MESSAGE);
            expect(stub.getCall(0)).to.be.calledWith('장바구니에 담김');

        });
    });

    // 세 번째 테스트 코드
    // .only를 붙이면 해당 테스트 코드만 실행됨
    // it.only('', () => {
    // })
    it('장바구니 버튼을 클릭하면 장바구니 페이지로 이동한다', () => {
        // action
        cy.getByCy('add-cart-button').click();

        // assertion
        cy.url().should('include', '/cart');
    });
})