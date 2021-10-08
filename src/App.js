import './App.css';
import UserList  from './UserList';
import React,{useEffect, useState} from 'react'
import axios from 'axios'

function App() {

  
  const [user, setuser] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          console.log(response)
          setuser(response.data);
        })
        .catch(function (error) {
          console.log(error);
          setError(error);
        })
  }, []);
  return (
    <div>
      <UserList user={user}/>

    </div>
  );
}

export default App;
