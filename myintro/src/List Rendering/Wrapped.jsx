import React from 'react'
import { Aside } from './Aside'
import { Footer } from './Footer'
import { NavBar } from './NavBar'
import { Section } from './Section'

export const Wrapped = () => {
    let components= [<NavBar/>,<Aside/>,<Section/>,<Footer/>]
    let renderComp= components.map((comps)=>{
        return (comps)
    })
  return (
    <div>
        {
            renderComp
        }
    </div>
  )
}
