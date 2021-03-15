import React, { useEffect, useState } from "react";
import { FormControl, Input, Button, InputLabel } from "@material-ui/core";
import Todo from "./components/Todo";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs.map((doc) => doc.data()));
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().task }))
        );
      });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    // setTodos([...todos, input]);
    db.collection("todos").add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  console.log(input);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form>
        <FormControl>
          <InputLabel>Write TODO 📝</InputLabel>
          <Input onChange={(e) => setInput(e.target.value)} value={input} />
        </FormControl>
        <Button
          disabled={!input}
          variant="contained"
          type="submit"
          onClick={addTodo}
          color="primary"
        >
          {" "}
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          // <li>{todo}</li>
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
