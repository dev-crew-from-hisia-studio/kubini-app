import React, { FC } from 'react'
import { TableParams } from '../utils/type'

export const Table:FC<TableParams> = ({children}) => {
  return (
    <div className='kui-table'>
      <div className='kui-table__container'>
        {children}
      </div>
    </div>
  )
}
