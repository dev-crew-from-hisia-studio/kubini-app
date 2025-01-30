import React from 'react'
import { CardParams } from '../utils/type'

export const Card: React.FC<CardParams> = ({id, tags = [], title, subtitle, children, addOrRemoveToArray, arrayToAction = [], withMinOption = false, actions = [] }) => {
  return (
    <div className='kui-page-list-item' >
      <div className='kui-page-list-item__min'>
        {
          withMinOption ? (
            <button type='button' className={`kui-page-list__checkbox kui-page-list-checkbox ${arrayToAction?.filter((el: any) => el === id).length > 0 ? "checked" : ""}`} onClick={addOrRemoveToArray}>
              {
                arrayToAction?.filter((el: any) => el === id).length > 0 ? (
                  <i className="pi-minimize-line"></i>
                ) : ""
              }
            </button>
          ) : null
        }
        {
          tags?.length > 0 ? (
            <>
              {
                tags?.slice(0,2).map((tag: string, index: number) => {
                  return (
                    <span className='kui-tag' key={index}>
                      {tag}
                    </span>
                  )
                })
              }
              {
                tags?.length > 2? (
                  <span className='kui-tag'>+{tags?.length - 2}</span>
                ) : null
              }
            </>
          ) : null
        }
        
      </div>
      <div className='kui-page-list-item__container'>
        <div className='kui-page-list-item__details'>
          <strong className='kui-page-list-item__title'>{title}</strong>
          <span>{subtitle || ''}</span>
          {children}
        </div>
      </div>
      {
        actions.length > 0 ? (
          <div className='kui-page-list-item__actions'>
            {
              actions?.map(({icon, label, style, onClick }, index: number) => (
                <button type='button' className={`kui-table-option ${style}`} key={index} onClick={() => {
                  onClick()
                }}>
                  <i className={icon}></i>
                  <span>{label}</span>
                </button>
              ))
            }             
          </div>
        ) : null
      }
    </div>
  )
}
