import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bacheca from './Bacheca.jsx'
import SchedaClasse from './SchedaClasse.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bacheca pubblicati={3} daVisualizzare={2} daAderire={1}/>
    <SchedaClasse classe="5A" indirizzo="Liceo Scientifico" nonVisti={2} eventi={3}/>
    <SchedaClasse classe="4B" indirizzo="Liceo Classico" nonVisti={1} eventi={2}/>
    <SchedaClasse classe="3C" indirizzo="Liceo Linguistico" nonVisti={0} eventi={1}/>
  </StrictMode>
)
