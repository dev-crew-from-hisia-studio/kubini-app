import React from 'react'
import { NavLink } from 'react-router-dom'

export const SubmenuMenu = ({title, tabs, here}:{title: string, tabs: any[], here?: any}) => {
  return (
    <div className='kui-submenu'>
      <h1>{title}</h1>
      <div className='kui-submenu__container'>
        {
          tabs.map((item: any, index: number) => (
            <div className='kui-submenu__item' key={index}>
              <NavLink to={item.path} end className={here === item.here ? "active" : ""}>
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </NavLink>
            </div>
          ))
        }
      </div>
    </div>
  )
}
