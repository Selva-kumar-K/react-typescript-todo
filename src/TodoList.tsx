import { useState } from 'react'
import './App.css'


interface item {

    id: number,
    text : string,
    completed : boolean
}

const TodoList = () => {

    const [todos, setTodos] = useState<item[]>([
        {id : 1, text : 'Learn Typescript', completed : false},
        {id : 2, text : 'Learn React', completed : false},
    ])

    const [input, setInput] = useState<string>("")

    const handleToggle = (id: number) => {

        setTodos(
            todos.map((todo) => {
                if (todo.id === id){
                    return {...todo, completed : !todo.completed}
                }
                return todo
            })
        )
    }

    const handleSubmit = () => {
        const newTodo : item = {
            id : Date.now(), text : input, completed : false
        }

        setTodos([...todos, newTodo])
    }
  return (
    <div className="container">

        <h3>TodoList</h3>
        <input type="text" placeholder="Enter task" onChange={(e) => setInput(e.target.value)}/>
        <button onClick={handleSubmit}>Add task</button>

        <ul>
            {todos.map((todo) => (
                <li key={todo.id} onClick={() => handleToggle(todo.id)} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList