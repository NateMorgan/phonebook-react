const NewForm = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <label htmlFor="lastName"> Last Name: </label>
      <input type="text" name="lastName" />
      <br />
      <label htmlFor="firstName"> First Name: </label>
      <input type="text" name="firstName" />
      <br />
      <label htmlFor="phoneNumber"> Phone Number: </label>
      <input type="text" name="phoneNumber" />
      <br />
      <button type="submit"> Add Contact </button>
    </form>

  );
}

export default NewForm;