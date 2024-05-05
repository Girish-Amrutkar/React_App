import React from 'react'
import { useContext } from 'react'
import { ChannelContext, UserContext } from './UseCont1'
import { UseCont5 } from './UseCont5'

export const UseCont4 = () => {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
    <div>
        <UseCont5/>
        <h1>Component 4</h1>
        <h1>My Name is {user} and Channel is {channel}</h1>
    </div>
  )
}
