import { useState } from 'react'

//import './App.css'

import { Menu } from './components/gestor/lateralMenu'
import { PanelProductos } from './components/gestor/panelTablaProductos'

import { API_HOST } from './config'
import { UploadImg } from './components/gestor/uploadImg'

function App() {


  return (
    <>
      <div className='container row'>
        <div className='col'>
          <Menu></Menu>
          
        </div>
        <div className='col'>
        
        
        </div>
        <div className='col'>
          <UploadImg></UploadImg>
        </div>
      </div>
    </>
  )
}

export default App
