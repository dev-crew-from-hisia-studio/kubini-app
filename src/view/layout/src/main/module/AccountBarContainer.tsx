import React, { useContext, useEffect } from 'react'
import { createInitial } from '../../../../../utils'
import { links } from '../../../../routes'
import { useNavigate } from 'react-router-dom'

export const AccountBarContainer = (
  {info, here}:
  {
    info: {
      fullname: string,
      username?: string,
      avatar: {
        url: string,
        alt: string
      }
    },
    here?: any
  }) => {
    let navigate = useNavigate()
    return (
      <div className='kui-account'>
        <div className='kui-account__onlines kui-account-onlines'>
          <div className='kui-account-onlines__status'>
            <span className='kui-chip is--success'>Tu es en ligne!</span>
          </div>
          <div className='kui-account-onlines__list'>
           
                <div className='kui-account-online' >
                  <div className='kui-account-online__avatar'>
                    {/* <img src={user?.information?.avatar?.url} alt={user?.information?.avatar?.alt || "user"} /> */}
                    <span>
                      {createInitial(`John DOE`)}
                    </span>
                    
                  </div>
                  <div className='notice'></div>
                  <span className='tooltip'>{`@johndoe`}</span>
                </div>
                <div className='kui-account-online'>
                  <div className='kui-account-online__avatar'>
                    <span>+3</span>
                  </div>
                  <span className='tooltip'>{`3 personnes en ligne`}</span>
                </div>
              
          </div>
        </div>
        <div className='kui-account__actions kui-account-actions'>
          <div className='kui-account-action'>
            <button className={here === "notification" ? "active" : ""} type='button' onClick={() =>navigate(links.notification)}>
              <i className="pi-bell-ringing-line"></i>
              <span>Notification</span>
            </button>
          </div>
        </div>
        <div className='kui-account__me kui-account-me'>
          <button  type='button' onClick={() => navigate(links.setting)}>
            <div className='kui-account-me__avatar'>
              {
                info?.avatar?.url ? (
                  <img src={info?.avatar?.url} alt={info?.avatar?.alt || "user"} />
                ) : (
                  <span>
                    {createInitial(`${info?.fullname}`)}
                  </span>
                )
              }
            </div>
            <span className='tooltip'>{`Mon compte (${info?.username})`}</span>
          </button>
        </div>
      </div>
    )
}
