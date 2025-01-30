import React, { FC, useEffect, useRef } from 'react'
import { ModalParams } from '../utils/type'

export const Modal: FC<ModalParams> = ({id, fnc, isOpen, withClose, size, place = "as--top", children}) => {
  const modalRef = useRef<any>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        fnc(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [fnc, isOpen])

  return (
    <div className={`kui-modal ${isOpen ? "is--open" : ""} ${place}`} id={id}>
      <div className={`kui-modal-box ${size}`} ref={modalRef}>
        {
          withClose ? (
            <div className='kui-modal-close_btn'>
              <button type='button' onClick={() => fnc(false)}>
                <i className="pi-close-line"></i>
              </button>
            </div>
          ) : null
        }
        <div className='kui-modal-box__container'>
          {children}
        </div>
      </div>
    </div>
  )
}
