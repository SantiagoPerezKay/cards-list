
import './App.css'
import Title from './components/Title.jsx'
import Form from './components/Form.jsx'
import { useState } from 'react'
import Card from './components/Card.jsx'
import SetUsersApi from './components/SetUsersApi.jsx'
function App() {

  const [users, setUsers] = useState([])

  return (
    <>
      <Title />
      <Form setUsers={setUsers} users={users} />
      <SetUsersApi setUsers={setUsers} />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
        {users.map((user, index) => <Card key={index} user={user} />)}
      </div>
    </>


  )
}

export default App
