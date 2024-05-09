import React,{useState} from 'react';
import '../styles.css';
// import FetchTodo from './FetchTodo';
function AddTodo({onUpdate}) {
  const [input1,setInput1] = useState('');
  const [input2,setInput2] = useState('');
  const handleSubmit = (event)=>{
      event.preventDefault();
      const data = {
        title:input1,
        description:input2
      };
      // const url = "http://localhost:3000/todo";
      const url = "https://todo-5-c49x.onrender.com/todo";
      fetch(url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(reponse=>{
        if(!reponse.ok){
          throw new Error("Network reponse was not ok");
        }
        return reponse.json();
      })
      .then(data => {
        console.log('Response from server:', data);
        onUpdate();
        // Handle response from server as needed
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
        // Handle error
      });
      setInput1('');
      setInput2('');
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div> Add Todo </div>
        <input id='input1'
          type ="text"
          value = {input1}
          onChange={(e)=>setInput1(e.target.value)}
        /> 
        <div> Desciption </div>
        <input id='input2'
          type = "text"
          value = {input2}
          onChange={(e)=>setInput2(e.target.value)}
        />
        <button type ='submit'>Add</button>
    </form>
    {/* <FetchTodo/> */}
    </>
  )
}

export default AddTodo