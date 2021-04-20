import React, { useState } from "react";

import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import FilterButton from "./components/FilterButton"
import CountingTask from "./components/CountingTask"
import "./style.css"

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const App = () => {
  const [filter, seFilter] = useState("All");
  const filterList = FILTER_NAMES.map(name => <FilterButton key={name} name={name} isPressed={name === filter} setFilter={seFilter} />)

  return (
    <div className="app">
      <div className="todo-app">
        <div className="todo-container">
          <h1 className="heading">Todo App</h1>
          <InputField />
          <div className="filters btn-group stack-exception">
            {filterList}
          </div>
          <CountingTask />
          <TodoList filter={filter} filterMap={FILTER_MAP} />
        </div>
      </div>
    </div>
  )
}
export default App