import React from 'react'
import { ChildComp } from './ChildComp'
import { PersonList } from './PersonList'

export const ParentComp = () => {
let persons = [
    {
        name: "Rushi",
        age: 23,
        id: 1,
        skills: "Core Java, SQL"
    },
    {
        name: "Rohit",
        age: 23,
        id: 2,
        skills: "JavaScript, Advanced Java"
    },
    {
        name: "Mahesh",
        age: 25,
        id: 3,
        skills: "Core Java"
    },
    {
        name: "Ashutosh",
        age: 22,
        id: 4,
        skills: "Python"
    },
    {
        name: "Girish",
        age: 24,
        id: 5,
        skills: "Full Stack Developer"
    }
]
  return (
    <>
{
    persons.map((person)=>{
        return <ChildComp key={person.id} person1={person}/>
    })
}
    </>
  )
}
