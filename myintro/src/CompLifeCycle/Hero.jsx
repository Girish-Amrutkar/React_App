import React from 'react'

export const Hero = ({heroName}) => {
    if (heroName === "thanos") {
        throw new Error(`${heroName} is not a Hero!!!`)
    }
  return (
    <div>
        {heroName}
    </div>
  )
}
