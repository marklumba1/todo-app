import { useState } from "react"
import Card from "../components/Card"

const apiResponse = [
    {name: 'Learn Javascript', done: false},
    {name: 'Learn React', done: true},
    {name: 'Build a React Application', done: false}
]
const AddInput = ({handleChange, value, handleSave}) => {
    return (
        <input type="text" value={value} onChange={e => handleChange(e.target.value)} onKeyUp={e => handleSave(e)} placeholder="Add new..." />
    )
}
const Home = () => {
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState(apiResponse)
   
    const handleDelete = (name) => {
        setTodos(todos.filter(todo => todo.name !== name))
    }
    const handleDone = (name) => {
        setTodos(todos.map(todo => todo.name === name ? {...todo, done: !todo.done} : todo))
    }
    const handleSave = (e) => {
        if (e.key === "Enter") {
            setTodos((prevTodo) => [...prevTodo, {name: input, done: false}])
            setInput("")
        }
    }

    return ( 
        <div className="home-container">
            <AddInput handleChange={setInput} value={input} handleSave={handleSave}/>
            <div className="cards-container">
                {todos.map(todo => <Card key={todo.name} todo={todo} handleDelete={handleDelete} handleDone={handleDone}/>)}
            </div>
        </div>
     );
}
 
export default Home;