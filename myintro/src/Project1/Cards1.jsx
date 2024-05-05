import React from 'react'
import { Fragment } from 'react'


export const Cards1 = (props) => {
    const { Data } = props
    return (
        <Fragment>
            <div className='cards'>
                {Data.players.map((d) => {
                    return (
                        <div className="card"><img src={d.img} />
                            <div className='card-body'>
                                <span className='card-category'>
                                    <h3>{d.name}</h3>
                                </span>
                                <p className='title'>{d.country}</p>
                                <div className=''></div>
                                    <label htmlFor="">ODI Career : {d.odi}</label><br />
                                    <label htmlFor="">Test Career : {d.test}</label><br />
                                    <label htmlFor="">T20 Career : {d.t20}</label>
                            </div>
                        </div>

                    )

                })}
            </div>
        </Fragment>
    )
}