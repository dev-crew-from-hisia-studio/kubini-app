import React from 'react'
import { TagParams } from '../utils/type'

export const Tag: React.FC<TagParams> = ({status, label}) => {
  return (
    <span className={`kui-tag is--${status}`}>{label}</span>
  )
}
