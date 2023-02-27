import React, { useState } from 'react'
import "./AddUser.css"

const AddUser = (props) => {
    
    const BaseState = { id: null, name: '', username: '' }

    const [user, setUser] = useState(BaseState)

    
    const AddUserInput = (event) => {
    const { name, value } = event.target
  
    setUser({ ...user, [name]: value })
    }
  return (
    <form id="AddForm"
    onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.username) return
    
        props.addUser(user)
        setUser(BaseState)
        }}>
      <label>Name</label>
      <input type="text" name="name" value={user.name}
    onChange={AddUserInput}/>
      <label>Username</label>
      <input type="text" name="username" value={user.username}
    onChange={AddUserInput}/>
      <button>Add new user</button>
    </form>
  )
}

export default AddUser