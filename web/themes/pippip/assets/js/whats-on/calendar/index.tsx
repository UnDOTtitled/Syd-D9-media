import React, { useContext } from 'react'
import { StateContext, DispatchContext } from '../WhatsOnInit'
import Button from '../ui/button'
import DatePicker from './DatePicker'
import { AppState } from '../utils/types'

/**
 * Set date range filters
 */
export default function FilterByDatePicker() {
  const { state } = useContext(StateContext)
  const { activeDropdown, dateRange } = state
  const { dispatch } = useContext(DispatchContext)

  const { from, to } = dateRange
  return (
    <>
      <Button
        clicked={() => dispatch({ type: AppState.TOGGLE_CALENDAR })}
        active={
          activeDropdown === AppState.TOGGLE_CALENDAR || to instanceof Date
        }
        classes={'btn h2 btn--dropdown'}
      >
        {activeDropdown === AppState.TOGGLE_CALENDAR
          ? 'Close calendar'
          : 'Calendar'}
      </Button>

      {activeDropdown === AppState.TOGGLE_CALENDAR && (
        <DatePicker
          classes={'o-listing__dropdown o-listing__dropdown-calendar'}
          from={from}
          to={to}
          reset={() => dispatch({ type: AppState.RESET_CALENDAR })}
          clicked={(day: Date) =>
            dispatch({ type: AppState.SET_DATE_RANGE, mode: day })
          }
        />
      )}
    </>
  )
}
