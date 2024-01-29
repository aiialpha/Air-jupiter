import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import NotFound from '../Pages/Error page/NotFound'


export default function AppNavigations() {
  return (
    <main>
     <Routes>
        <Route path='/' element={<Home />} />

        <Route path='*' element={<NotFound />} />
     </Routes>
     <Outlet />
    </main>
  )
}
