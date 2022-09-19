const Contact = require("../Models/Contact")

exports.addContact=async(req,res)=>{
    try {
        const newContact = new Contact(req.body)

        const found = await Contact.findOne({email : req.body.email})

        if(found){
            return res.status(400).send('Email already exist')
        }

        await newContact.save()

        res.status(200).send({Msg :'Contact added', newContact})
    } catch (error) {
        res.status(500).send('Could not add contact')
    }
}

exports.getContacts=async(req,res)=>{
    try {
        const contacts = await Contact.find()
        res.status(200).send({Msg:"List Contacts",contacts})
    } catch (error) {
        res.status(500).send('Could not get contacts')
    }
}

exports.deleteContact=async(req,res)=>{
    const {id} = req.params
    try {
        
        const delContact = await Contact.findByIdAndDelete(id)
        res.status(200).send({Msg : 'Contact deleted', delContact})
    } catch (error) {
        res.status(500).send('Could not delete contact')
    }
}

exports.updateContact=async(req,res)=>{
    const {id} = req.params
    try {
        const updatedContact = await Contact.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({Msg : 'Contact updated', updatedContact})
    } catch (error) {
        res.status(500).send('Could not update contact')
    }
    
}

exports.getOneContact=async(req,res)=>{
    const {id} = req.params
    try {
        const contact = await Contact.findById(id)
        res.status(200).send({Msg : 'Contact',contact})
    } catch (error) {
        res.status(500).send('Could not get contact')
    }
}