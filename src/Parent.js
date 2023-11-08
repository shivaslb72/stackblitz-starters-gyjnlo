import React,{useRef,useState}from 'react';
import Child from "./Child"
import './style.css';

export default function Parent() {
  const bookName = useRef(null)
  const[books,setBooks] = useState([])
  const handleClick = () =>{
    setBooks([...books,bookName.current.value])
    bookName.current.value = '';
   
  }
  return (
    <div>
      <input 
      type="text"
      ref={bookName}
      placeholder="Please Enter the Book Name"
      />
      <br/>
      <button onClick={()=>handleClick()}>Submit</button>
      <Child books={books} />
    </div>
  );
}
