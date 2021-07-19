import Profiles from "./components/profiles";
import axios from "axios";
import React from 'react'

function App() {
    let user;
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
       user = res.data;
       console.log(user);
    })
    return (
        <div className="App">
            <button className='get-btn'>get users</button>
            {user.map((person) => {
                return (
                    <Profiles id={person.id} name={person.name} username={person.username}/>
                )
            })}
        </div>
    );
}

export default App;
