import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../utils'

export const WebRouter = () => {
  return (
    <Routes>
      {
        routes.map(({Component, path}, index) => (
            <Route path={path} element={<Component/>} key={index}/>
        ))
      }
    </Routes>
  )
}
