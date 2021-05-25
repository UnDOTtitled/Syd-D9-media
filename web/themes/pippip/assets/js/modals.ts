import focusTrap from 'focus-trap-js'

/**
 * Modals & overlays
 */

function openModal(link: HTMLElement) {
  const target = document.getElementById(link.dataset.target)
  const modalClose: HTMLElement = target.querySelector('.o-modal__close')
  const focusableElements = target.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  const firstElement = focusableElements[0]

  target.setAttribute('data-visible', 'true')

  document.body.setAttribute('data-modalOpen', 'true')

  // Not using `transitionend` becuase of prefixed browser issues
  if (window.innerWidth > 768) {
    setTimeout(() => {
      ;(firstElement as HTMLElement).focus()
    }, 200)

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closeModals(target)
      } else {
        focusTrap(e, target)
      }
    })
  }

  modalClose.addEventListener('click', () => closeModals(target))
}

function closeModals(target: HTMLElement) {
  target.setAttribute('data-visible', 'false')
  document.body.setAttribute('data-modalOpen', 'false')

  document.removeEventListener('keydown', e => {
    focusTrap(e, target)
  })
}

export default function modals() {
  const modalLinks = document.querySelectorAll('.a-modal')

  modalLinks.forEach((link: HTMLElement) =>
    link.addEventListener('click', () => openModal(link))
  )
}

modals()
