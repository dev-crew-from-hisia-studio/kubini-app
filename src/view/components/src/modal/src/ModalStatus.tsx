import React from 'react'
import { ModalStatusParams } from '../utils/type'

export const ModalStatus: React.FC<ModalStatusParams> = ({status, title, subtitle, children}) => {
  return (
    <div className={`kui-modal-box__status kui-modal-box-statut is--${status}`}>
      <div className='kui-modal-box-statut__illustration'>
        {children}
      </div>
      <div className='kui-modal-box-statut__container'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}
