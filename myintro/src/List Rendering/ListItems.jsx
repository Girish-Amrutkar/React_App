import React from 'react'

export const ListItems = () => {
    let fruits=["apple", "pineapple", "mango", "watermelon", "banana"]
  return (
    <>
        {
            fruits.map(fruit=><ul><li>{fruit}</li></ul>)
        }
    </>
  )
}
