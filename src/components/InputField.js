import React from "react";

import { connect } from "react-redux"
import { addTodo, changeTodoData } from "../action";

const InputField = ({ task, addTodo, changeTodoData }) => {
  // const [inputField, setInputField] = useState("");
  const handleChange = (e) => {
    changeTodoData("text", e.target.value)
    // setInputField(e.target.value)
  }

  const generateNewId = (inputText) => {
    const randomNum = Math.floor(Math.random() * 100 + 1);
    const slicedText = inputText.slice(0, 2)
    return (randomNum + slicedText)
  }

  const handleSubmit = (e) => {
    if (task) {
      const newId = generateNewId(task)
      const newTask = { id: newId, task: task, completed: false }
      addTodo(newTask)
    }
  }

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      handleSubmit()
    }
  }
  return (
    // <form>
    <>
      <div className="input-container">
        <input type="text" name="todo" value={task} placeholder="Enter Your task.." onChange={handleChange} onKeyUp={handleEnter} />
        <button className="submit-button" type="button" onClick={handleSubmit}><i className="bi bi-plus-circle-fill"></i></button>
      </div>
    </>
    // </form>
  )
}

const mapStateToProps = (state) => {
  return {
    task: state.todo_store.text
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    changeTodoData: (key, value) => dispatch(changeTodoData(key, value))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(InputField)