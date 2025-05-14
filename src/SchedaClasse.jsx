import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './SchedaClasse.css'

function SchedaClasse({classe, indirizzo, nonVisti, eventi}) {
  return (
    <>
        <div className='contScheda'>
            <p className='grassetto'> Classe {classe}</p>
            <p> {indirizzo} <br></br> ISTITUTO D'ISTRUZIONE SUPERIORE </p>
            <p> File alunni non visti: {nonVisti}</p>
            <p> Eventi calendario: {eventi}</p>
        </div>
    </>
  )
}

export default SchedaClasse