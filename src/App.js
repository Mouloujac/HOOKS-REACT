import './App.css';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserTable from './UserTable';
import AddUser from './AddUser'

function App() {

  const usersTable = [
    { id: 1, name: 'Martin', username: 'Matin'},
    { id: 2, name: 'Jesus', username: 'Levrai'},
    { id: 3, name: 'Caroline', username: 'Latortue'}, 
  ]

  const [users, setUsers] = useState(usersTable)
  
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  return (
    <div className="App">
      <div id="container">
        <h1>CRUD App with Hooks</h1>
        <div id="container2">
          <div id="left">
            <h2>Add user</h2>
            <AddUser addUser={addUser} />
          </div>
          <div id="right">
            <h2>View users</h2>
            <UserTable users={users}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
