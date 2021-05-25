import { format, add } from 'date-fns'

const today = format(new Date(), 'd/L/yyyy')
const testStartDate = format(add(new Date(), { days: 1 }), 'ccc LLL dd yyyy')
const testEndDate = format(add(new Date(), { weeks: 2 }), 'ccc LLL dd yyyy')

describe('Today filter', () => {
  it('Clicking today filter', () => {
    cy.visit('whats-on')

    cy.contains('Today').click().should('have.class', 'active')

    cy.contains('Calendar').should('have.class', 'active')

    cy.get('.o-listing__active-filters')
      .find('.a-btn')
      .contains(`${today} - ${today}`)

    cy.url().should('include', 'from').should('include', 'to')

    cy.contains('See all')

    cy.contains('Calendar').click()
    cy.get(`[aria-label="${testStartDate}"]`).click()
    cy.get(`[aria-label="${testEndDate}"]`).click()

    cy.contains('Today').should('not.have.class', 'active')
  })
})
