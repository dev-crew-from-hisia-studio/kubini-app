import React from 'react'
import { UserCardParams } from '../utils/type'
import { createInitial } from '../../../../../utils'
import { TableOptions } from '../../table'

export const UserCard: React.FC<UserCardParams> = ({id, avatar, name, username, children, addOrRemoveToArray, arrayToAction = [], withMinOption = false, actions = [], options =[] }) => {
  return (
    <div className='kui-page-list-user'>
      <div className='kui-page-list-user__avatar'>
        {
          avatar ? (
            <img src={avatar} alt={"avatar"} />
          ) : (
            <span>
              {createInitial(`${name}`)}
            </span>
          )
        }
      </div>
      <div className='kui-page-list-user__container'>
        <div className='kui-page-list-user__name'>
          <strong>{`${name}`}</strong>
          {username? <span>{`@${username}`}</span> : null}
          {children}
        </div>
      </div>
      {
        actions?.length > 0 ? (
          <div className='kui-page-list-user__actions'>
            {
              actions?.map(({icon, label, onClick }, index: number) => (
                <button type='button' className={`kui-page-list-user__action`} key={index} onClick={() => {
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
      {
          withMinOption ? (
            <div className='kui-page-list-user__min'>
            <button type='button' className={`kui-page-list__checkbox kui-page-list-checkbox ${arrayToAction?.filter((el: any) => el === id).length > 0 ? "checked" : ""}`} onClick={addOrRemoveToArray}>
              {
                arrayToAction?.filter((el: any) => el === id).length > 0 ? (
                  <i className="pi-minimize-line"></i>
                ) : ""
              }
            </button>
            </div>
          ) : null
        }

        {
          options?.length > 0? (
            <TableOptions atype={"reduce"} tabs={options}/>
          ) : null
        }
    </div>
  )
}
