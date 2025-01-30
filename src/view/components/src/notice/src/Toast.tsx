import React, { FC, useEffect, useState } from 'react'
import { ToastParams } from '../utils/type'

export const Toast: FC<ToastParams> = ({id, status, fnc,children}) => {
  const [wait, setWait] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setWait(false)
      fnc(false)
    }, 5000);
    return () => clearTimeout(timer);
  })

  return (
    <div className={`kui-toast ${wait ? "is--open" : "is--close"}`} id={id}>
      <div className={`kui-toast-contain ${status}`}>
        <div className='kui-toast-contain__icon'>
            {
                status === "st--info" ? (
                    <i className=" pi-information-line"/>
                ) : (
                    status === "st--danger" ? (
                        <i className="pi-alert-octagon-line"/>
                    ) : (
                        status === "st--success" ? (
                            <i className="pi-check-circle-line"/>
                        ) : (
                            status === "st--warning" ? (
                                <i className="pi-alert-line"/>
                            ) : null
                        )
                    )
                )
            }
        </div>
        <div className='kui-toast-contain__container'>
            {children}
        </div>
      </div>
    </div>
  )
}
