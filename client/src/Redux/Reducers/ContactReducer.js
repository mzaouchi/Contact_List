import { GET_CONTACTS, GET_ONE_CONTACT } from "../ActionTypes/ContactTypes"

const initialState={
    contacts : [],
    contact : {}
}

const ContactReducer=(state = initialState,action)=>{
    switch (action.type) {
        case GET_CONTACTS : return {...state,contacts :action.payload}
        case GET_ONE_CONTACT : return {...state,contact : action.payload}
        default: return state
    }
}

export default ContactReducer