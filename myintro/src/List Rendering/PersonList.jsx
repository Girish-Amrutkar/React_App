import React from 'react'

export const PersonList = () => {
    let persons=[
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
    let personList = persons.map((person)=>{
        return <h4>My Name is {person.name} and Age is {person.age} and skills I have in {person.skills}</h4>
    })
  return (
    <>
        {
            personList
        }
    </>
  )
}
