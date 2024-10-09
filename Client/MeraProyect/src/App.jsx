import { useState } from 'react'



import { Menu } from './components/gestor/lateralMenu'
import { PanelProductos } from './components/gestor/panelTablaProductos'

//import { API_HOST } from './config'
import { UploadImg } from './components/gestor/uploadImg'
import { Route, Routes, Link } from 'react-router-dom'
import TopBar from './components/gestor/topBar'




function App() {

//  <Route path='/admin/' element={}/>
  return (
    <>
      <div className=''>
        <TopBar/>
        <div className=''>
          <Menu/>
          <Routes> 
            <Route path='/admin/productos' element={<PanelProductos />}/>
            <Route path='/admin/uploadImg' element={<UploadImg />}/>
            <Route path='*' element={<Link to='/admin' />}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
