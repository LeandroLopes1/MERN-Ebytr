import React, { useState } from "react"

function Tarefa({ item, updateTask, deleteTask }) {

  const [tempText, setTempText] = useState("");

  return(
    <div className={"row"}>
      <input type="checkbox" checked={!item.active} onClick={ () => { updateTask({...item, active: !item.active })}} />
      
    {(item.edit || (item.text === "" )) ? (
      <input type="text" placeholder={item.text} 
      onChange={ (e)=> {setTempText(e.target.value)}  }
      onBlur={ () => { updateTask({...item, text: tempText, edit: false })}}
      />
    )
      : 
      <span onClick={ () => { updateTask({ ...item, edit: true }) }}
      style={{ textDecoration: item.active ? "none" : "line-through" }}
      >{ item.text }</span>
    }
      <button className={"del"} onClick= { () => { deleteTask(item) }}>X</button>
    </div>
  );
};

export default Tarefa;
