import React, { useState, useEffect } from "react";
import Tarefa from "./Tarefa";

function ListaTarefas() {

  const [tasks, setTasks] = useState([]);
  const [filterTasks, setFilterTasks] = useState({ filter: false, active: true});

 function getTask() {
  fetch("http://localhost:5000/list", 
  { method: "GET" })
    .then(response => response.json())
    .then(data => setTasks(data));
};

function addTask() {
  fetch("http://localhost:5000/add", 
  { method: "POST", headers: { "Content-Type": "application/json" }, 
  body: JSON.stringify({ "text": "", "active": true }) })
  .then(response => response.json())
  .then(() => getTask());
};

function updateTask(item) {
  fetch("http://localhost:5000/update", 
  { method: "PUT", headers: { "Content-Type": "application/json" }, 
  body: JSON.stringify(item) })
  .then(response => response.json())
  .then(() => getTask());
};

function deleteTask(item) {
  fetch("http://localhost:5000/delete", { method: "DELETE", 
  headers: { "Content-Type": "application/json" }, 
  body: JSON.stringify(item) })
  .then(response => response.json())
  .then(() => getTask());
}; 

useEffect(() => {
  getTask();
}, []);

const changeTaskStatus = filterTasks.filter ? tasks.filter(item => item.active === filterTasks.active) : tasks;

  return (
    <div className={"container"}>
      <div>
     {changeTaskStatus.map(item => {
       return <Tarefa key={item._id} item={item} updateTask={ updateTask } deleteTask={ deleteTask }/>
      })}
    <div className={"btn"}>
    <button
     onClick={() => setFilterTasks({ filter: false })}
     style={ filterTasks.filter ? {} : { fontWeight: "bold" } }
     >Todos</button>
    <button 
    onClick={() => setFilterTasks({ filter: true, active: true })}
    style={ ((filterTasks.filter) && (filterTasks.active === true)) ? { fontWeight: "bold" } : {} }
    >Pendentes</button>
    <button
     onClick={() => setFilterTasks({ filter: true, active: false })}
     style={ ((filterTasks.filter) && (filterTasks.active === false)) ? { fontWeight: "bold" } : {} }
     >Concuidos</button>
    </div>
    <div className={"btn"}>
    <button onClick={ addTask }>Inserir nova tafera</button>
    </div>
    </div>
    </div>
  );
};

export default ListaTarefas;