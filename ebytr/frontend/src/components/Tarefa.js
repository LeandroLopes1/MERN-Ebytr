import React, { useState } from "react"

function Tarefa({ item, updateTask, deleteTask }) {

  const [tempText, setTempText] = useState("");
 
  function handleChange(event) {
    setTempText(event.target.value);
  };

  function clickOffInput() {
    updateTask({ 
      ...item, 
      text: tempText,
      edit: false, 
    });
  };

  function clickOnInput() {
    updateTask({ 
      ...item, 
      edit: true, 
    });
  };

  function deleteTaskItem() {
    deleteTask(item);
  };
 
  function checkboxClick() {
    updateTask({ 
      ...item, 
      active: !item.active, 
    });
  };

  return(
    <div className={"row"}>
      <input type="checkbox" checked={!item.active} onClick={ checkboxClick } />
      
    {(item.edit || (item.text === "" )) ? (
      <input type="text" value={ tempText} placeholder={ item.text }
      onChange={ handleChange }
      onBlur={ clickOffInput }
      />
    )
      : 
      <span onClick={ clickOnInput }
      style={{ textDecoration: item.active ? "none" : "line-through" }}
      >{ item.text }</span>
    }
      <button className={"del"} onClick= { deleteTaskItem }>X</button>
    </div>
  );
};

export default Tarefa;
