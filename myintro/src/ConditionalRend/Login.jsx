import React from 'react'

export const Login = () => {
  return (
    <>
      <div align='center'>
        <legend>LOGIN FORM</legend>
        <br />
        {/* <h1>Login Form</h1> */}
        <form action="">
          <table align='center'>
            <tr>
              <td><label htmlFor="email" min="16">Enter Email :</label></td>
              <td><input className='input' type="email" name="email" id="email" required placeholder='Enter Email' /></td>
            </tr>
            <tr>
              <td><label htmlFor="pswd" min="16">Enter Password :</label></td>
              <td><input className='input' type="password" name="pswd" id="pswd" required placeholder='Enter Password' /></td>
            </tr>
          </table>
          <input className='input' id='button3' type="submit" value="Log In" />
          <br />
        </form>
      </div>
    </>
  )
}
