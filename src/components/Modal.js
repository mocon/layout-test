import clsx from 'clsx'
import { useEffect } from 'react'

import { useModal } from '../providers'

export const Modal = () => {
  const { isOpen, setIsOpen } = useModal()

  // Add/remove class to body to prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) document.body.classList.add('modal-open')
    else document.body.classList.remove('modal-open')
  }, [isOpen])

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [setIsOpen])

  return (
    <div className={clsx('modal', isOpen ? 'open' : 'closed')}>
      <div className='modal-content'>
        <h1>Modal</h1>
        <p>Modal content</p>
      </div>
      {isOpen && (
        <button onClick={() => setIsOpen(!isOpen)} className='close-modal'>
          Close
        </button>
      )}
    </div>
  )
}
