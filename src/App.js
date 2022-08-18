import { useEffect, useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
import Lishka from "./components/Lishka";

function App() {
  const [todos, setTodos] = useState([]);

  async function fetchData() {
    const data = await fetch(
      "https://beckand-51e35-default-rtdb.europe-west1.firebasedatabase.app/todos.json"
    );
    const response = await data.json();
    const todos = [];
    for (let key in response) {
      todos.push({
        id: key,
        value: response[key].value,
      });
    }
    setTodos(todos);
  }

  const getTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>  
      <FormInput newPost={getTodo} />
      {todos.map((item) => (
        <Lishka value={item.value}/>
      ))}
    </div>
  );
}

export default App;
