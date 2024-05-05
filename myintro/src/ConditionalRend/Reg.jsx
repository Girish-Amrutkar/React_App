import React from 'react'

export const Reg = () => {
    return (
        <>
            <div align='center'>
                <legend>REGISTRATION FORM</legend>
                {/* <h1>Registration Form</h1> */}
                <br />
                <form action="">
                    <table align='center'>
                        <tr>
                            <td><label htmlFor="fname">First Name :</label></td>
                            <td><input className='input' type="text" name="fname" id="fname" pattern="[A-Z a-z]{6}" required minlength="0" maxlength="10" placeholder="Enter First Name" autofocus autocapitalize="sentence" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="lname">Last Name :</label></td>
                            <td><input className='input' type="text" name="lname" id="lname" pattern="[A-Z a-z]{6}" required minlength="0" maxlength="10" placeholder="Enter First Name" autofocus autocapitalize="sentence" /></td>
                        </tr>
                            <td><label htmlFor="mobile">Enter Mobile Number :</label></td>
                            <td><input className='input' type="tel" name="mobile" id="mobile" pattern="[0-9]{10}" required minlength="0" maxlength="10" placeholder="Enter Mobile Number" autofocus autocapitalize="sentence" /></td>
                        <tr>
                            <td><label htmlFor="age">Enter Age :</label></td>
                            <td><input className='input' type="number" name="age" id="age" min="1" max="5" placeholder='Enter Age'/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="dob">Date of Birth :</label></td>
                            <td><input className='input' type="date" name="dob" id="dob" min="1996-01-01" max="2021-12-31" required/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email" min="16">Enter Email :</label></td>
                            <td><input className='input' type="email" name="email" id="email" required placeholder='Enter Email'/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="pswd" min="16">Enter Password :</label></td>
                            <td><input className='input' type="password" name="pswd" id="pswd" required placeholder='Enter Password'/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="pass" min="16">Re-Enter Password :</label></td>
                            <td><input className='input' type="password" name="pass" id="pass" required placeholder='Re-enter Password'/></td>
                        </tr>
                    </table>
                    <td><input className='input' id='button1' type="submit" value="Register" /></td>
                    <td><input className='input' id='button2' type="reset" value="Reset" /></td>
                </form>
            </div>
        </>
    )
}
