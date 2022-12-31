import Contact from "../Contact/Contact";

const Phonebook = (props) => {
  return ( 
    <>
      <hr/>
      <h2>Contacts</h2>
      <table>
        <thead>
          <tr>
            <th> Last Name </th>
            <th> First Name </th>
            <th> Phone Number </th>
          </tr>
        </thead>
        <tbody>
          {props.phonebook.map(contact =>
            <Contact key={contact.phoneNumber} contact={contact}/>
            )}
        </tbody>
      </table>
    </>
  );
}

export default Phonebook;