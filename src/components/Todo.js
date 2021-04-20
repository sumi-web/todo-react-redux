import React from "react";
import { connect } from "react-redux"

import { editTodo, removeTodo, changeTodoData, toggleCheckBox } from "../action"

const Todo = ({ todo_list, removeTodo, editTodo, changeTodoData, toggleCheckBox, filter, filterMap }) => {

  const handleEdit = (id, text) => {
    changeTodoData("todo_id", id)
    editTodo(text)
  }

  const handleRemove = (id) => {
    removeTodo(id)
  }

  const handleToggle = (id, value) => {
    toggleCheckBox(id, value)
  }

  return (
    <>
      {
        todo_list.filter(filterMap[filter]).map((list) =>
        (<li id={list.id} key={list.id} className="todo stack-small">
          <div className="c-cb todo-text">
            <input id="todo-0" type="checkbox" defaultChecked={list.completed} onChange={() => handleToggle(list.id, !list.completed)} />
            <label className="todo-label" htmlFor="todo-0">
              {list ? list.task.toUpperCase() : null}
            </label>
          </div>
          <div className="icon-holder">
            <button type="button" onClick={() => handleEdit(list.id, list.task)}><i className="bi bi-pencil-square"></i></button>
            <button type="button" onClick={() => handleRemove(list.id)}><i className="bi bi-x-circle-fill"></i>
            </button>
          </div>
        </li>))
      }
    </>
  )
}
const mapDispatchToProps = (dispatch) => ({
  removeTodo: (key) => dispatch(removeTodo(key)),
  editTodo: (value) => dispatch(editTodo(value)),
  toggleCheckBox: (id, value) => dispatch(toggleCheckBox(id, value)),
  changeTodoData: (key, value) => dispatch(changeTodoData(key, value))
})

const mapStateToProps = (state) => {
  console.log("state===", state)
  return {
    todo_list: state.todo_store.todos
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
