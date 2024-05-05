import React from 'react'

export const KeyRend = () => {
    let dalindars=["Ashutosh","Sushil","Dnyaneshwar","Mahesh","Girish"]
  return (
    <div>
        {
            dalindars.map((dalindar,index)=>{
                return <h1 key={index}>{index+1}.{dalindar}</h1>
            })
        }
    </div>
  )
}
