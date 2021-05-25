import { format, add } from 'date-fns'

const nextWeek = format(add(new Date(), { days: 7 }), 'd/L/yyyy')
const nextWeekPlusSeven = format(add(new Date(), { days: 14 }), 'd/L/yyyy')

const testStartDate = format(add(new Date(), { days: 1 }), 'ccc LLL dd yyyy')
const testEndDate = format(add(new Date(), { weeks: 2 }), 'ccc LLL dd yyyy')

describe('Next week filter', () => {
  it('Clicking next week filter', () => {
    cy.visit('whats-on')

    cy.contains('Next Week').click().should('have.class', 'active')

    cy.contains('Calendar').should('have.class', 'active')

    cy.get('.o-listing__active-filters')
      .find('.a-btn')
      .contains(`${nextWeek} - ${nextWeekPlusSeven}`)

    cy.url().should('include', 'from').should('include', 'to')

    cy.contains('See all')

    cy.contains('Calendar').click()
    cy.get(`[aria-label="${testStartDate}"]`).click()
    cy.get(`[aria-label="${testEndDate}"]`).click()

    cy.contains('Close calendar').click()

    cy.contains('Next Week').should('not.have.class', 'active')
  })
})
