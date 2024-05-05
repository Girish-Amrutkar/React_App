import React from 'react'

export const NameList = () => {
    let name = ["bruce", "diana", "lee", "jorden", "robert"];
    // let nameList = name.map(names=><h1>{names}</h1>)

    let nameList = name.map((names)=>{
        return <h1>{names}</h1>
    })
    return (
        <>
                {/* <h1>{name[0]}</h1>
                <h1>{name[1]}</h1>
                <h1>{name[2]}</h1> */}
                {
                    nameList
                }
        </>
    )
}
