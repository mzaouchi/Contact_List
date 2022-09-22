import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getContacts } from "../Redux/Actions/ContactActions"
import UserCard from "./UserCard"

const ListUsers=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getContacts())
    },[])

    const contacts = useSelector(state => state.ContactReducer.contacts)
    return(
        <div className="yaakoub">
            {
                contacts.map(contact => <UserCard contact={contact}/>)
            }
        </div>
    )
}

export default ListUsers