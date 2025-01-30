import React, { FC } from 'react'
import { TableItemParams } from '../utils/type'
import { creerInitiales } from '../../../../../utils'

export const TableItem: FC<TableItemParams> = ({title, withImage = true, subtitle, image, avatarType = "circle"}) => {
  return (
    <div className='kui-table-item'>
      {
        withImage ? (
          <div className={`kui-table-item__avatar as--${avatarType}`}>
            { image ? ( 
              <img src={image} alt="table-item" />
            ) : (
              <span>{creerInitiales(title)}</span>
            )}
          </div>
        ) : null
      }
      <div className='kui-table-item__container'>
        <strong>{title}</strong>
        <span>{subtitle}</span>
      </div>
    </div>
  )
}
