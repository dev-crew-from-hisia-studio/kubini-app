import React, { useContext, useEffect } from 'react'
import { MainLayout } from '../../../layout'
import { useNavigate } from 'react-router-dom'
import { LogoIcon } from '../../../assets/illustration'
import { fr } from 'date-fns/locale'
import { format } from 'date-fns'
import { links } from '../../../routes'

export const HomePage = () => {
  

  return (
    <MainLayout here='home' title='Accueil'>
      <div className='kui-page is--min'>
        <div className='kui-home'>
          <div className='kui-home__header kui-home-header'>
            <div className='kui-home-header__logo'>
              <LogoIcon/>
            </div>
            <div className='kui-home-header__title'>
              <strong>Salut!</strong>
              <h1>{'Jonh Gaius'}</h1>
              <span>Aujourdui: {format(new Date(), "EEE d MMM yyyy, HH:mm", { locale: fr })}</span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
