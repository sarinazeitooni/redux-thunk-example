import Profiles from "./components/profiles";
import axios from "axios";
import {useState} from "react";

function App() {
    const [user, setuser] = useState('');
    const person = axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
        // setuser(res.data)
    })
    return (
        <div className="App">
            {console.log(user)}
            <button className='get-btn'>get users</button>
        </div>
    );
}

export default App;
