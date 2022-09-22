import { useEffect, useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneContact, updateContact } from '../Redux/Actions/ContactActions'

const EditUser=()=> {
  const {id} = useParams()

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getOneContact(id))
  },[])

  const contact = useSelector(state=> state.ContactReducer.contact)

  const [name,setName] = useState(contact.name)
  const [old,setOld] = useState(contact.old)
  const [email,setEmail] = useState(contact.email)

  useEffect(()=>{
    setName(contact.name)
    setOld(contact.old)
    setEmail(contact.email)
  },[contact])

  const navigate = useNavigate()

  const handleEdit=(a)=>{
    a.preventDefault()
    dispatch(updateContact(id,{name,old,email},navigate))

  }
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name" />      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Old</Form.Label>
      <Form.Control value={old} onChange={(e)=> setOld(e.target.value)} type="number" placeholder="Enter old" />      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />      
    </Form.Group>

   
    <Button variant="primary" type="submit" onClick={(e)=>handleEdit(e)}>
      Submit
    </Button>
  </Form>
  )
}

export default EditUser