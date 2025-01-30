import React, { useEffect } from 'react'
import { MainLayout } from '../../../../layout'
import { EmptyNotification } from '../../../../assets/illustration'
import { useNavigate } from 'react-router-dom';
import { links } from '../../../../routes';

export const NotificationPage = () => {
  let navigate = useNavigate()

  return (
    <MainLayout here='notifiction' title='Boite de reception'>
      <div className='kui-page is--min'>
        <div className='kui-page-empty is--huge'>
          <div className='kui-page-empty__illustration'>
            <EmptyNotification loop={true} autoplay={true} size={{
              height: (380 / 1.3),
              width: (420 / 1.3)
            }} play={true}/>
          </div>
          <div className='kui-page-empty__details'>
            <h1>Aucune notification</h1>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
