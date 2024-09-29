import { useState } from 'react'

//import './App.css'

import { Menu } from './components/gestor/lateralMenu'
import { PanelProductos } from './components/gestor/panelTablaProductos'

import { API_HOST } from './config'

function App() {


  return (
    <>
      <div className='container row'>
        <div className='col'>
          <Menu></Menu>
          
        </div>
        <div className='col'>
        
        <PanelProductos/>
        </div>
      </div>
    </>
  )
}

export default App
