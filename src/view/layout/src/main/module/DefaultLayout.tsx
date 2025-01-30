import React, { FC } from 'react'
import { MenuLayoutParams } from '../../type/menu'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../../../../routes'
import { AccountBarContainer } from './AccountBarContainer'
import { LogoIcon } from '../../../../assets/illustration'
import { APP_NAME } from '../../../../../utils'

export const DefaultLayout: FC<MenuLayoutParams> = ({here, isMin = false, children}) => {
    const navItems = [
      {
        label: "Reglages",
        items: [
          {
            label: "Categorie",
            icon: "pi-school-line",
            path: links.categories,
            here: here === "parameter" ? "active" : "",
            show: true
          },
          
        ]
      },
      {
        label: "Administrateurs",
        items: [
          {
            label: "Administrateurs",
            icon: "pi-group-3-line",
            path: links.admins,
            here: here === "admins" ? "active" : "",
            show: true
          },
          
        ]
      },
    ]

    return (
      <>
        <div className={`kui-menu ${isMin ? "is--min" : ""}`}>
          <header className='kui-menu__header'>
            <Link to={links.home}>
                <LogoIcon/>
            </Link>
          </header>
          <nav className='kui-menu__navigation kui-menu-navigation'>
            <div className='kui-menu-navigation__item kui-menu-navigation-item'>
              <NavLink to={links.home} className={here === "home" ? "active" : ""} end>
                <i className="pi-home-6-line"></i>
                <span>Accueil</span>
              </NavLink>
            </div>
            <div className='kui-menu-navigation__container'>
              {
                navItems?.map((item: any, index: number) => (
                  <div className='kui-menu-navigation__group kui-menu-navigation-group' key={index}>
                    <strong>{item.label}</strong>
                    <div className='kui-menu-navigation-group__container'>
                        {
                          item.items?.filter((nav: any) => nav.show).map((nav: any, idx: number) => (
                            <div className='kui-menu-navigation__item kui-menu-navigation-item' key={idx}>
                              <NavLink to={nav.path} className={nav.here} end>
                                <i className={nav.icon}></i>
                                <span>{nav.label}</span>
                              </NavLink>
                            </div>
                          ))
                        }
                    </div>
                  </div>
                ))
              }
            </div>
            <div className='kui-menu-navigation__item kui-menu-navigation-item'>
                <NavLink to={links.setting} className={here === "setting" ? "active" : ""} end>
                  <i className="pi-settings-3-line"></i>
                  <span>Paramètres</span>
                </NavLink>
            </div>
          </nav>
        </div>

        <AccountBarContainer here={here} info={{
          fullname: 'John DOE',
          username: 'john-doe',
          avatar: {
            url: '',
            alt: 'avatar-john-doe'
          }
        }}/>
        <main className={`kui-main ${isMin ? "is--min" : ""}`} role='main'>
          {children}
        </main>
        <footer className={`kui-footer ${isMin ? "is--min" : ""}`}>
          <p>©{new Date().getFullYear()} {APP_NAME}</p>
        </footer>
      </>
    )
}
