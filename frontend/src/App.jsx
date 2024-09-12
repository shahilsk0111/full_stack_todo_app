import { useEffect, useState } from 'react'
import ToDo from './components/ToDo'
import { addTodo, getAllTodo, updateTodo , deleteTodo } from './utils/HandleApi'
import Navbar from './Navbar'



function App() {
  const [todo, setTodos] = useState([])
  const [text, setText] = useState('')
  const [isUpdating, setIsUpdating] = useState(false)
  const [todoId, setTodoId] = useState("")

  useEffect(() => {
    getAllTodo(setTodos)
  }, [])

  const updateMode = (_id , text)=>{
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)
  }

  return (
    <>
    <Navbar/>
      <div className="container">
       
      
        <h1>ToDo App</h1>

        <div className="top">
          <input
            type="text"
            placeholder='Add Todos...'
            value={text}
            onChange={(e) => setText(e.target.value)} />

          <div className="add"
            onClick={
              isUpdating ? () => updateTodo(todoId , text , setTodos , setIsUpdating) :
                () => addTodo(text, setText, setTodos)}>
            {isUpdating ? "UPDATE" : "ADD"}</div>
        </div>

        <div className="list">

          {todo.map((item) => <ToDo key={item._id} text={item.text}

          updateMode={()=>{updateMode(item._id , item.text)}}

          deleteTodo={()=>deleteTodo(item._id , setTodos)}

          />)}


        </div>
      </div>
    </>
  )
}

export default App
