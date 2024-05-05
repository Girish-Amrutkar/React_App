import React from 'react'
import { useNavigate } from 'react-router-dom'

export const More5 = () => {

    let navigate = useNavigate();
    let gotoHome = () => {
        navigate("/Home")
    }

    let goBack = () => {
        navigate(-1)
    }

    let goNext = () => {
        navigate(+1)
    }
    return (
        <div >
            <h1 className='text-center'>More Page</h1>
            <button className='btn btn-primary' onClick={() => { gotoHome() }}>GoTo Home</button>
            <button className='btn btn-primary' onClick={() => { goBack() }}>Back</button>
            <button className='btn btn-primary' onClick={() => { goNext() }}>Next</button>
        </div>
    )
}

export default More5