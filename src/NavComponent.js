import React, { useState } from 'react'
import formfeild from './Data.js'
const NavComponent = ({setTableData}) => {

    const [formInputs,setformInputs] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    })
const handleChange = (e) => {
   
    setformInputs(previousValue=>({...previousValue,[e.target.placeholder]:e.target.value}))
}

const handelClick = (e) => {
    setTableData(previousData=>([...previousData,formInputs]))
}
  return (
    <div>
   {
    formfeild.map((feild,index)=>
       
            <React.Fragment key={index}>
            <input type={feild.type} placeholder={feild.name} onChange={handleChange}/>
            <br/>
            </React.Fragment>
    )
   }
   <input type="button" value='Submit' onClick={handelClick}/>
    </div>

  )
}

export default NavComponent