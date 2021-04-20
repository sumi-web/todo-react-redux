import React from "react"
import Todo from "./Todo"

const TodoList = ({ filter, filterMap }) => {
  return (
    <div className="todo-list-container">
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <Todo filter={filter} filterMap={filterMap} />
      </ul>
    </div>
  )
}

export default TodoList
