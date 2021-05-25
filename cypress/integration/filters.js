describe('Taxo filter', () => {
  it('Clicking taxo filter', () => {
    cy.visit('whats-on')

    cy.contains('Filter')
      .click()
      .should('have.class', 'active')
      .contains('Close')

    cy.get('.o-listing__dropdown-types')
      .find('.link:first()')
      .click()
      .should('have.class', 'active')
      .then($btn => {
        const selectedCategory = cy
          .get('.o-listing__active-filters')
          .find('button')
          .contains($btn.text())
        cy.contains('Close filter').click()

        cy.url().should('include', 'type')
        cy.contains('See all')
        selectedCategory.click()
        cy.url().should('not.include', 'type')
        cy.contains('See all').should('not.exist')
        cy.contains('Filter')
          .not('have.class', 'active')
          .not('contains', 'Close')
        cy.get('.o-listing__dropdown-filters').should('not.exist')
      })
  })
})
