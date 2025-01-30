import React, { FC } from 'react'
import { AuthLayoutParams } from '../type/auth'
import images from '../../../assets/images'
import { LogoIcon } from '../../../assets/illustration'
import { APP_NAME, titlePage } from '../../../../utils'

export const AuthLayout: FC<AuthLayoutParams> = ({title = "Connexion", subtitle= "Accès reservé", image = images.auth, children}) => {
  titlePage(title)
  return (
    <div className='kui-auth-layout'>
      <div className='kui-auth-layout__container'>
       
        <header className='kui-auth-layout__header'>
          <div className='kui-auth-layout__logo'>
            <LogoIcon/>
          </div>
          <div className='kui-auth-layout__title'>
            <h1>{title}</h1>
            <span>{subtitle}</span>
          </div>
        </header>
        <main role='main' className='kui-auth-layout__main'>
          {children}
        </main>
        <footer className='kui-auth-layout__footer'>
          <p>©{new Date().getFullYear()} {APP_NAME}</p>
        </footer>
      </div>
      <div className='kui-auth-layout__image'>
        <img src={image} alt={title} />
      </div>
    </div>
  )
}
