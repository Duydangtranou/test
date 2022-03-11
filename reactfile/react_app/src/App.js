import React, {useState, useEffect} from 'react';
import Header from './compoment/header';
import Form from './compoment/form';
import List from './compoment/list';
import './App.css';

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([initialState]);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
        <div className="app-wrapper">
          <div>
            <Header />
          </div>
          <div>
            <Form 
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              edit={edit}
              setEdit={setEdit}
            />
          </div>
          <div>
            <List todos={todos} setTodos={setTodos} setEdit={setEdit}/>
          </div>
        </div>
    </div>
  );
};

export default App;
