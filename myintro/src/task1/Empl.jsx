import React from 'react'
import Employees from "./Employee.json"
import "./Emp.css"

const Empl = () => {
  return (
    <div className='parent'>
      <h1>Employee Details</h1>
      {
        Employees && Employees.map(empl => {
          return (
            <div className='child'>
              <div id='data' align='center'>
                <h2 className='data'>Name : {empl.name}</h2>
                <br />
                <h4 className='data'>Designation : {empl.post}</h4>
                <h4 className='data'>Salary : {empl.salary}</h4>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Empl;