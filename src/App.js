import React from 'react';
import Todolist from './Todo/TodoList';
import { useState } from 'react';
import Context from './Context'
import AddTodo from './Todo/addTodo';


function App() {
const [todos, setTodos] = useState([
  {id:1, completed: false, title: 'Купить хлеб'},
  {id:2, completed: false, title: 'Купить масло'},
  {id:3, completed: false, title: 'Купить молоко'}
])
 
   function toggleTodo(id){
      setTodos(todos.map((element) => {
        if(element.id === id) {
          element.completed = !element.completed
        }
        return element
      }

      ))
   }
   function removeTodo (id){
    setTodos(todos.filter(element => element.id !== id))
   }
   function addTodo(title){
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
   }

  return (
    <Context.Provider value={{removeTodo}}>
    <div className="wrapper">
  <h1>Записки подкаблучника</h1>
  <AddTodo onCreate={addTodo}/>
   {(todos.length) ? <Todolist todos = {todos} onToggle = {toggleTodo}/> : <p>Ну вот  и закончились твои мучения дорогой. Порадуйся. Купи пивка.</p>} 
    </div>
    </Context.Provider>
  );
}

export default App;
