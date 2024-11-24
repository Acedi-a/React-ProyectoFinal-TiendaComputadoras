import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Rutas from "../Routes.jsx";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div style={{marginTop: '100px'}} >
          <Rutas/>
      </div>
  </StrictMode>,
)
