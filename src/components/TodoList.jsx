import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos,setEdit,removeTodo}) {
  return (
    <div className="bg-gray-100 p-6 rounded shadow-md w-full lg:w-1/4">
    <ul>
    {
      todos.map((todo,index)=>(
        <TodoItem key={index} index={index} todo={todo}  setEdit={setEdit} removeTodo={removeTodo}/>
      ))
    }
    </ul>
  </div>
  )
}

export default TodoList
