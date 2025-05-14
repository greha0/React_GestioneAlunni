import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bacheca from './Bacheca.jsx'
import SchedaClasse from './SchedaClasse.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SchedaClasse classe={1}/>
  </StrictMode>
)
