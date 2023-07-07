import { useEffect } from 'react'
import { useScrollLock } from '../../hooks/useScrollLock'
import PropTypes from 'prop-types';

export function Modal({ open, setOpenModal, content }) {
  const { lockScroll, unlockScroll } = useScrollLock()

  useEffect(() => {
    if (open) {
      lockScroll()
    } else {
      unlockScroll()
    }
  }, [open])

  if (open) {
    return (
      <div className="w-screen h-screen fixed inset-0 z-30 overflow-hidden flex items-center justify-center bg-black bg-opacity-40">
        <div className='w-1/2 h-1/3 bg-white border border-gray-200 rounded-md shadow-md relative flex items-center justify-center'>
          <button
            onClick={() => { setOpenModal(false) }}
            className='rounded-full py-2 px-4 shadow-xl absolute -right-4 -top-4 bg-blue-600 text-white'
          >
            X
          </button>
          <div>
            {content}
          </div>
        </div>
      </div>
    )
  }
  return null
}

Modal.propTypes = {
  open: PropTypes.boolean,
  setOpenModal: PropTypes.func,
  content:PropTypes.string,
}
