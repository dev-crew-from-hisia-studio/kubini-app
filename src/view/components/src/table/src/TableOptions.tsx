import React, { FC, useEffect, useRef, useState } from 'react'
import { TableActionsParams } from '../utils/type'

export const TableOptions: FC<TableActionsParams> = ({tabs, atype="reduce"}) => {
  const [openMd, setOpenMd] = useState<boolean>(false)
  const modalRef = useRef<any>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenMd(false);
      }
    };

    if (openMd) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMd])
  return (
    <div className='kui-table-options' ref={modalRef}>
      {
        atype === "reduce" ? (
          <>
            <div className='kui-table-options__btn'>
              <button type='button' onClick={() => setOpenMd(!openMd)}>
                <i className="pi-more-2-line"></i>
              </button>
            </div>
            <div className={`kui-table-options__list ${openMd ? "is--open" : ""}`}>
              {
                tabs?.map(({icon, label, style, onClick }, index: number) => (
                  <button type='button' className={`kui-table-options__item ${style}`} key={index} onClick={() => {
                    onClick()
                    setOpenMd(false)
                  }}>
                    <i className={icon}></i>
                    <span>{label}</span>
                  </button>
                ))
              }
            </div>
          </>
        ) : (
          tabs?.map(({icon, label, style, onClick }, index: number) => (
            <button type='button' className={`kui-table-option ${style}`} key={index} onClick={() => {
              onClick()
              setOpenMd(false)
            }}>
              <i className={icon}></i>
              <span>{label}</span>
            </button>
          ))
        )
      }
    </div>
  )
}
