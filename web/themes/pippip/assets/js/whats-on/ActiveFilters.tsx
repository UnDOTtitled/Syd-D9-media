import React, { useContext } from 'react'
import { StateContext, DispatchContext } from './WhatsOnInit'
import Button from './ui/button'
import { htmlDecode, formatDateHuman } from './utils/helpers'
import { AppState, TaxonomyEntity } from './utils/types'

function getTermNameFromId(
  tid: number,
  genres: TaxonomyEntity[],
  seasons: TaxonomyEntity[]
) {
  const taxonomy = genres.concat(seasons)
  const currentTerm = taxonomy.filter(term => term.tid === tid)

  return htmlDecode(currentTerm[0].name)
}

/**
 * Display selected filters to enable quick removal by user
 */
export default function ActiveFilters() {
  const { state, data } = useContext(StateContext)
  const { taxonomyFilter, dateRange } = state
  const { genres, seasons } = data
  const { dispatch } = useContext(DispatchContext)

  const { from, to } = dateRange

  if (taxonomyFilter.length === 0 && to === undefined) return null

  return (
    <div className="o-listing__active-filters">
      {taxonomyFilter.map((termId: number) => (
        <Button
          key={termId}
          clicked={tid =>
            dispatch({ type: AppState.SET_FILTERS, mode: termId })
          }
          classes={'a-btn'}
        >
          {getTermNameFromId(termId, genres, seasons)}
          <span>x</span>
        </Button>
      ))}
      {to instanceof Date && (
        <Button
          clicked={() => dispatch({ type: AppState.RESET_CALENDAR })}
          classes={'a-btn'}
        >
          {formatDateHuman(from, '/')} - {formatDateHuman(to, '/')}
          <span>x</span>
        </Button>
      )}
      {taxonomyFilter.length > 0 || to ? (
        <Button
          clicked={() => dispatch({ type: AppState.SHOW_ALL })}
          classes={'a-btn'}
        >
          See all
        </Button>
      ) : null}
    </div>
  )
}
