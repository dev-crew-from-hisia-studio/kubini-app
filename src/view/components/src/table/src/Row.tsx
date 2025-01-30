import React, { FC } from 'react'
import { RowParams } from '../utils/type'

export const Row:FC<RowParams> = ({rtype = "body", children}) => {
  return (
    <div className={`kui-table-row is--${rtype}`}>
      {children}
    </div>
  )
}
