import React, { useEffect, useState } from 'react';

function FetchTodo({shouldUpdate}) {
    const [todos, setTodos] = useState([]);
    const [count,setCount] = useState([]);

    useEffect(() => {
        const url = "http://localhost:3000/todo";
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // console.log("Fetched todos:", data);
            setTodos(data); // Update state with fetched todos
        })
        .catch(error => {
            console.error("Error fetching todos:", error);
        });
    }, [shouldUpdate,count]); // Empty dependency array means this effect runs once after the first render

    const removeTodo = async(idToRemove)=>{
        console.log(idToRemove);
        try {
            await fetch(`http://localhost:3000/todo/${idToRemove}`, {
                method: 'DELETE',
            });
            setCount(count+1);
        } catch (error) {
            console.error("Error removing todo:", error);
        }
    };
    return (
        <div>
            {todos.map(todo => (
                <div key={todo._id} className="todo-item">
                    <div className="todo-content">
                        <h3 className="todo-title">{todo.title}</h3>
                        <p className="todo-description">{todo.description}</p>
                    </div>
                    <button className="remove-button" onClick={() => removeTodo(todo._id)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default FetchTodo;
