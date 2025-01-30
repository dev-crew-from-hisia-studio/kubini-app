import React, { FC } from 'react'
import { ButtonParams } from '../utils/type'

export const Button: FC<ButtonParams> = ({label, navigateLink, bstyle = "is--neutral", btype = "button", btypo = "is--simple-btn", bsize = "is--responsive", active = true, iconLeftClass, iconRightClass, onClick}) => {
  return (
    <>
    {
      btypo === "is--link" ? (
        <button type="button" onClick={navigateLink} className={`kui-link ${active ? bstyle : "is--disable"}`}>
          {iconLeftClass ? <i className={iconLeftClass}></i> : null}
          <span>{label}</span>
          {iconRightClass ? <i className={iconRightClass}></i> : null}
        </button>
      ) : (
        btype === "submit" ? (
          <button type='submit' className={`kui-btn ${btypo} ${active ? bstyle : "is--disable"} ${bsize}`} disabled={!active}>
            {iconLeftClass ? <i className={iconLeftClass}></i> : null}
            <span>{label}</span>
            {iconRightClass ? <i className={iconRightClass}></i> : null}
          </button>
        ): (
          <button type={btype} className={`kui-btn ${btypo} ${active ? bstyle : "is--disable"} ${bsize}`} onClick={onClick} disabled={!active}>
            {iconLeftClass ? <i className={iconLeftClass}></i> : null}
            <span>{label}</span>
            {iconRightClass ? <i className={iconRightClass}></i> : null}
          </button>
        )
        
      )
    }
    </>
  )
}
