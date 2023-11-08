import React, { useState } from 'react'
import { Cv } from './data/Cv'
import { Projects } from './data/Projects'
import { Expierence } from './data/Expierence'

export const Details = () => {
  const [select, setSelect] = useState(1)

  const getSeleccion = (value) => {
    setSelect(value)
  }

  return (


    <div className='details'>


      <div className='container'>
        <div onClick={() => getSeleccion(1)} className={(select == 1) ? 'items select' : 'items'}>CV</div>
        <div onClick={() => getSeleccion(2)} className={(select == 2) ? 'items select' : 'items'}>PROJECTS</div>
        <div onClick={() => getSeleccion(3)} className={(select == 3) ? 'items select' : 'items'}>EXPIERENCE</div>
      </div>


      <div className='details-show'>
        {
          (select == 1) && 
          <Cv/>
        }

        {
          (select == 2) && 
          <Projects/>
        }

        {
          (select == 3) && 
          
          <Expierence/>
        }

      </div>
    </div>
  )
}
