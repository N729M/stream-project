import React, {useState} from 'react';
import { BsSearch } from 'react-icons/bs';

export default function SearchBar() {
  
    const [input, setInput] = useState("");
  
    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
    }

    const handleChange =  (value) =>
    return (
    <div>

        < BsSearch />
        <div className="searher">
            <input type="text"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder="Rechercher..."/>
        </div>
        <div className="searchresult"></div>
    </div>
  )
}
