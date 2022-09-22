import { Card } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteContact } from "../Redux/Actions/ContactActions"
const UserCard=({contact})=>{
  const dispatch = useDispatch()
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>
           <h5>Old : {contact.old}</h5>
           <h5>Email : {contact.email}</h5>
        </Card.Text>
        <Card.Link as={Link} to={`/EditUser/${contact._id}`}>Edit</Card.Link>
        <Card.Link onClick={()=> dispatch(deleteContact(contact._id))}>Delete</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default UserCard