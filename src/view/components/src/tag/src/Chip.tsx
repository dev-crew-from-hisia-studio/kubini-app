import React from 'react'
import { ChipParams } from '../utils/type'

export const Chip: React.FC<ChipParams> = ({status, label, iconLeft, iconRight}) => {
  return (
    <div className={`kui-chip is--${status}`}>
      {iconLeft && <i className={iconLeft}/>}
      <span>{label}</span>
      {iconRight && <i className={iconRight}/>}
    </div>
  )
}
