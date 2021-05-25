import React from 'react'
import ReactDOM from 'react-dom'
import WhatsOn from './whats-on/WhatsOnInit'

const root = document.getElementById('root')

/**
 * Usage:
 *
 * <div id="root" data-no-results="<No results copy>"></div>
 * {{ attach_library('pippip/whatson') }}
 */

if (root) {
  const noResults = root.dataset.noresults

  ReactDOM.render(
    <React.StrictMode>
      <WhatsOn noResultsCopy={noResults || 'No results'} />
    </React.StrictMode>,
    root
  )
}
