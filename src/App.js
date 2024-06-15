import React from 'react';
import './App.css';
import { useState } from 'react';




function App() {
  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] =useState('')

  const deleteTodo = (id) =>{
    const updateTodos = toDos.filter(todo => todo.id !== id);
    setToDos(updateTodos);
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" value={toDo} onChange={(e)=>setToDo(e.target.value)}  placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{ id:Date.now(), text : toDo, status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">

       { toDos.map((obj)=>{


        return(
          <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(obj)
              setToDos(toDos.filter(obj2=>{
                 if(obj2.id===obj.id){
                    obj2.status=e.target.checked
                }
                return obj2
              }))
            }}
           value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>

          {toDos.map(todo => (
            <li key={todo.id}>
              {todo.task}
              <div className="right">
            <i onClick={()=> deleteTodo(todo.id)} className='fas fa-times'></i>
          </div>
            </li>
          ))}

          
        </div>
        )
        })

        } 

        {toDos.map((obj)=>{
          if(obj.status){
            return(<h1>{obj.text}</h1>)
          }
        })}

      </div>
    </div>
  );
}

export default App;
