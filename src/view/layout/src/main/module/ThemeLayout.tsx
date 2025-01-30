import React, { FC, useContext } from 'react'
import { MenuLayoutParams } from '../../type/menu'
import { useNavigate } from 'react-router-dom'
import { LogoIcon } from '../../../../assets/illustration'
import { links } from '../../../../routes'
import { AccountBarContainer } from './AccountBarContainer'
import { APP_NAME } from '../../../../../utils'

export const ThemeLayout:FC<MenuLayoutParams> = ({children, here}) => {

  let navigate = useNavigate()
  return (
    <>
        <div className='kump-layout-header-logo'>
            <LogoIcon/>
        </div>

        <div className='kump-layout-header-apps'>
            <button className={`kump-layout-header-app ${here === "home" ? "is--active" : ""}`} type='button' onClick={() => navigate(links.home)}>
                <i className="pi-home-6-line"></i>
                <span>Accueil</span>
            </button>
           
            <button className={`kump-layout-header-app ${here === "admins" ? "is--active" : ""}`} type='button' onClick={() => navigate(links.admins)}>
                <i className="pi-group-3-line"></i>
                <span>Administrateurs</span>
            </button>
                        
            <button className={`kump-layout-header-app ${here === "parameter" ? "is--active" : ""}`} type='button' onClick={() => navigate(links.parameter)}>
                <i className="pi-settings-3-line"></i>
                <span>Reglages</span>
            </button>
        </div>

        <AccountBarContainer here={here} info={{
            fullname: 'John DOE',
            username: 'john-doe',
            avatar: {
                url: '',
                alt: 'avatar'
            }
        }}/>

        <main role='main' className='kump-layout-main'>
            {children}
        </main>
        <footer className='kump-layout-footer'>
            <p>©{new Date().getFullYear()} {APP_NAME}</p>
        </footer>
    </>
  )
}
