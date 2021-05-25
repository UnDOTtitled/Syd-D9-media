import { format, add } from 'date-fns'

const today = format(new Date(), 'd/L/yyyy')

describe('Active filters', () => {
  it('Clicking active filters removes selected filter', () => {
    cy.visit('whats-on')

    cy.contains('Today').click()

    cy.contains('Filter').click()

    cy.get('.o-listing__dropdown-types')
      .find('.link:first()')
      .click()
      .then($btn => {
        const selectedCategory = cy
          .get('.o-listing__active-filters')
          .find('button')
          .contains($btn.text())
      })

    cy.contains('Close filter').click()

    cy.get('.o-listing__active-filters')
      .find('.a-btn')
      .contains(`${today} - ${today}`)

    // TODO check active filters turn anything off
  })
})
