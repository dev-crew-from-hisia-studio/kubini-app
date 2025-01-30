import React from 'react'
import { MainLayout } from '../../../../../layout'
import { Link, useNavigate } from 'react-router-dom'
import { links } from '../../../../../routes'

export const ParameterPage = () => {
  let navigate = useNavigate()
  const settings = [
    {
      icon: "pi-box-2-line",
      path: links.categories,
      label: "Catégories",
      color: "#9400FF",
      background: "#9400FF45"
    },
    
  ]
  return (
    <MainLayout title="Parametres" here='parameter' isMin={true}>
      
      <div className='kui-page is--min'>
        <div className='kui-arianne'>
          <Link className='kui-link' to={links.home}>
            <i className="pi-home-6-line-2"></i>
            <span>Accueil</span>
          </Link>
          <span> | </span>
          <p>Paramètres</p>
        </div>
        <div className='kui-page__header kui-page-header'>
          <h1>🧰</h1>
          <h2>Paramètres</h2>
          <p>Bienvenue dans les paramètres globaux de la plateforme</p>
        </div>
        <strong>Que souhaitez-vous faire</strong>
        <div className='kui-page__settings kui-page-settings'>
          {
            settings.map((item: any, index: number) => (
              <button type='button' key={index} className='kui-page-setting-item' onClick={() => navigate(item.path)}>
                <div className='kui-page-setting-item__icon' style={{
                  color: item.color,
                  background: item.background
                }}>
                  <i className={item.icon}></i>
                </div>
                <strong>{item.label}</strong>
              </button>
            ))
          }
        </div>
      </div>
    </MainLayout>
  )
}
