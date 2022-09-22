import { useState } from 'react'
import { useDispatch} from "react-redux"
import {useNavigate} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import { addContact } from '../Redux/Actions/ContactActions'
const AddUser=()=>{
  const [name,setName] = useState('')
  const [old,setOld] = useState(0)
  const [email,setEmail] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleAdd=(a)=>{
    a.preventDefault()
    dispatch(addContact({name,old,email},navigate))

  }
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name" />      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Old</Form.Label>
      <Form.Control onChange={(e)=> setOld(e.target.value)} type="number" placeholder="Enter old" />      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />      
    </Form.Group>

   
    <Button variant="primary" type="submit" onClick={(e)=>handleAdd(e)}>
      Submit
    </Button>
  </Form>
  )
}

export default AddUser