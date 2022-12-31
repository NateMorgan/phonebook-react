const Contact = ({contact}) => {
  return ( 
    <tr>
      <td> {contact.lastName} </td>
      <td> {contact.firstName} </td>
      <td> {contact.phoneNumber} </td>
    </tr>
  );
}

export default Contact;