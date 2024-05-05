import React from 'react'

export const ChildComp = ({person1}) => {
  return (
    <>
    <h4>My Name is {person1.name} and Age is {person1.age} and skills I have in {person1.skills}</h4>
    </>
  )
}
