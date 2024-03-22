import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {addUser} from './UserRedux'
import {usedispatch, useSelector } from 'react-redux'



function Create() {
    const [name, setName]= useState('')
    const [email, setEmail] = useState('')
    const user = useSelector((state) => state.user);
    const dispatch = usedispatch();
    const navigate = useNavigate();

    const handleSubmit = (Event) =>{
        Event.prevendefault();
        dispatch(addUser({id: user[user.length -1].id + 1, name, email}))
        navigate('/')
    }
    return (
    <div>

    </div>
  )
}

export default Create