import { useState } from "react";

function MakeTodo() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDoList((currentArray) => [toDo, ...currentArray]);
  };
  console.log(toDoList);
  return (
    <div>
      <h1>My SSAFY TODOS : {toDoList.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your Todo"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MakeTodo;
