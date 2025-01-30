import React, { FC, Fragment } from 'react'
import { ModalActionsParams } from '../utils/type'

export const ModalActions: FC<ModalActionsParams> = ({tabsActions}) => {
  return (
    <div className='kui-modal-box__actions'>
      {
        tabsActions.filter((el: any) => el.show).map(({icon, type, label, style, active, onClick }, index: number) => (
          <Fragment key={index}>
            {
              type === "submit" ? (
                <button type='submit' className={`kui-modal-box-action ${!active ? "is--disable" : style}`} key={index} disabled={!active}>
                  <i className={icon}></i>
                  <span>{label}</span>
                </button>
              ):(
                <button type={type} className={`kui-modal-box-action ${!active ? "is--disable" : style}`}  disabled={!active} key={index} onClick={onClick}>
                  <i className={icon}></i>
                  <span>{label}</span>
                </button>
              )
            }
          </Fragment>
        ))
      }
    </div>
  )
}
