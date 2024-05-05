import React, { useState } from 'react'

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allEntry, setAllEntry] = useState([])

    const submitForm = (e) => {
        e.preventDefault()
        const newEntry = { email: email, password: password }
        setAllEntry([...allEntry, newEntry])
        console.log(newEntry);
        setEmail("")
        setPassword("")
    }
    return (
        <>
            <div>
                <div className="container bg-danger rounded my-5 w-50" style={{ height: "300px" }}>
                    <div className="row">
                        <div className="col">
                            <form action="" className='my-3' onSubmit={submitForm}>
                                <label htmlFor="email" className='my-2'>Email</label>
                                <input type="email" autoComplete='off' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} className="form-control my-2" placeholder='Email' required />
                                <br />
                                <label htmlFor="password" className='my-2'>Password</label>
                                <input type="password" autoComplete='off' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} className="form-control my-2" placeholder='Password' required />
                                <br />
                                <button type='submit' className='btn btn-warning'>SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <table className='table border table-bordered text-white bg-dark'>
                    {
                        allEntry.map((cValue, index)=>{
                            return<>
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>Email :{cValue.email}</td>
                                    <br />
                                    <td>Password :{cValue.password}</td>
                                </tr>
                            </>
                        })
                    }
                </table>
            </div>
        </>
    )
}
