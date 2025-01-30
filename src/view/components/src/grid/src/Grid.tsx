import React, { FC } from 'react'
import { GridParams } from '../utils/type'

export const Grid: FC<GridParams> = ({direction, align, spacing, wrap, gap, children}) => {
  return (
    <div className={`kui-grid ${direction} ${spacing} ${"al-"+align}`} style={{
      gap: `${gap}em`,
      flexWrap: wrap ? "wrap" : "nowrap",
    }}>
      {children}
    </div>
  )
}
