import React from 'react'
import './profile.css'

export const ProfileData = ({ profiles }) => {
    return (
        <>
            {
                profiles.length ? profiles.map((pro) => {
                    return <div className="cards">
                        <div className="card">
                            <img src={pro.avatar_url} alt="" />
                            <div className="card-body">
                                <span className="card-category">{pro.node_id}</span>
                                <h3 className="title">{pro.login}</h3>
                                <a href={pro.url}>
                                    <button>View Profile</button>
                                </a>
                            </div>
                        </div>
                    </div>
                }) : null
            }
        </>
    )
}
