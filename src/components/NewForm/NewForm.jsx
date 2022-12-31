import { useState,useEffect } from "react"

const NewForm = (props) => {

  const [formData,setFormData] = useState(
    {
      firstName:'',
      lastName:'',
      phoneNumber:''
    }
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addContact(formData)
    // setFormData(    
    //   {
    //     firstName:'',
    //     lastName:'',
    //     phoneNumber:''
    //   }
    // )
  }

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  return ( 
    <>
      <hr/>
      <h2> Add New Contact </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="lastName"> Last Name: </label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
        <br />
        <label htmlFor="firstName"> First Name: </label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
        <br />
        <label htmlFor="phoneNumber"> Phone Number: </label>
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
        <br />
        <button type="submit"> Add Contact </button>
      </form>
    </>

  );
}

export default NewForm;