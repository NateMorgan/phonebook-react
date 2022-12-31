import Contact from "../Contact/Contact";

const Phonebook = (props) => {
  return ( 
    <>
      <hr/>
      <h2>Contacts: {props.phonebook.length}</h2>
      <table>
        <thead>
          <tr>
            <th> Last Name </th>
            <th> First Name </th>
            <th> Phone Number </th>
          </tr>
        </thead>
        <tbody>
          { props.phonebook.length > 0 ?
            <>
            {props.phonebook.map(contact =>
              <Contact key={contact.phoneNumber} contact={contact}/>
              )}
            </>
          :
            <tr id='noContacts'>
              <td> No </td>
              <td> Contacts </td>
              <td> Found </td>
            </tr>
          }
        </tbody>
      </table>
    </>
  );
}

export default Phonebook;