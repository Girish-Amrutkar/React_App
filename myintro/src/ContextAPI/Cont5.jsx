import React from 'react'
import { ChannelContext, UserContext1 } from './Cont1'

export const Cont5 = () => {
  return (
    <div>
        <UserContext1.Consumer>
            {
                (user)=>{
                    return <ChannelContext.Consumer>
                        {
                            (channel)=>{
                                return <h1>My Name is {user} and Channel Name is {channel}.</h1>
                            }
                        }
                    </ChannelContext.Consumer>
                }
            }
        </UserContext1.Consumer>
    </div>
  )
}
