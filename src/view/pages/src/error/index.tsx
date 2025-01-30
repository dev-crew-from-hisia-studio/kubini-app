import React from 'react'
import { MainLayout } from '../../../layout'
import { NotFoundError } from '../../../assets/illustration'

export const ErrorPage = () => {
  return (
    <MainLayout here='home' title='Accueil'>
      <div className='kui-page is--min'>
        <div className='kump-page-empty is--huge'>
          <div className='kump-page-empty__illustration'>
            <NotFoundError loop={true} autoplay={true} size={{
              height: (380 / 1.3),
              width: (420 / 1.3)
            }} play={true}/>
          </div>
          <div className='kump-page-empty__details'>
            <h1>Page introuvable</h1>
            <p>La page que vous cherchez n'existe pas ou a été supprimée.</p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
