import React, { FC } from 'react'
import { ColumnParams } from '../utils/type'

export const Column: FC<ColumnParams> = ({ctype, children}) => {
  return (
    <div className={`kui-table-column is--${ctype}`}>
      {children}
    </div>
  )
}
