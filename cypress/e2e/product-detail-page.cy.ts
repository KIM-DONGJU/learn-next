describe('상품 상세 페이지', () => {
    it('상품 상세 페이지로 진입하면 상품의 이름과 가격이 정상적으로 표시된다.', () => {
        // prepare + action
        cy.visit('/products/0');

        // assertion
        cy.getByCy('product-image').should('be-visible');
        cy.getByCy('product-name').should('be-visible');
        cy.getByCy('product-price').should('be-visible');
    })
})