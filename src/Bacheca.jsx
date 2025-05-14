import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Bacheca.css'

function Bacheca({pubblicati, daVisualizzare, daAderire}) {
  return (
    <>
      <div className='cont'>
        <div className="titolo">
          Bacheca Messaggi
        </div>

        <div className='cont-notifiche'>
          <p><span className='num'>{pubblicati}</span> pubblicati oggi</p>
          <p><span className='num'>{daVisualizzare}</span> con richiesta presa visione</p>
          <p><span className='num'>{daAderire}</span> con richiesta adesione</p>
        </div>
      </div>
    </>
  )
}

export default Bacheca
