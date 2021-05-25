import { format, add } from 'date-fns'

const startDate = format(new Date(), 'ccc LLL dd yyyy')
const endDate = format(add(new Date(), { weeks: 2 }), 'ccc LLL dd yyyy')

describe('Calendar', () => {
  it('Clicking calendar filter', () => {
    cy.visit('whats-on')

    cy.contains('Calendar')
      .click()
      .should('have.class', 'active')
      .contains('Close')

    cy.get('.o-listing__dropdown-calendar')

    cy.get(`[aria-label="${startDate}"]`).click()
    cy.get('.DayPicker-Day').should('have.class', 'DayPicker-Day--start')

    cy.contains('Please select an end date')
    cy.get(`[aria-label="${endDate}"]`).click()

    cy.get('.DayPicker-Day').should('have.class', 'DayPicker-Day--end')

    cy.get('.o-listing__active-filters')
    cy.url().should('include', 'from').should('include', 'to')
    cy.contains('See all')

    cy.contains('Clear selection').click()
    cy.get('.o-listing__active-filters').should('not.exist')
    cy.url().should('not.include', 'from')
    cy.url().should('not.include', 'to')
    cy.contains('See all').should('not.exist')

    cy.contains('Close calendar').click()
    cy.get('.o-listing__dropdown-calendar').should('not.exist')
  })
})
