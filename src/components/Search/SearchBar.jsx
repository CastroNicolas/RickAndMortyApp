import { useState } from "react";
import './Search.css'

/* eslint-disable react/prop-types */
export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
     setId(event.target.value)
   }
   const handleSubmit  = (event) => {
      event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
      onSearch(id);
      setId('');
   }
   

   return (
      <form onSubmit={handleSubmit } className="search-container">
         <input type='search' onChange={handleChange} placeholder="Enter an ID...." value={id} className="inputSearch"/>
         <button className="buttonSearch" type="submit" >Add</button>
      </form>
   );
}
