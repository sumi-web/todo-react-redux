import React from "react";
import { connect } from "react-redux";

const CountingTask = ({ todo_list }) => {
  const count = todo_list.length
  return (
    <h2 id="list-heading" style={{ color: "#0061a8" }}>
      {count}  Tasks Remaining
    </h2>
  )
}

const mapStateToProps = (state) => {
  return {
    todo_list: state.todo_store.todos
  }
}
export default connect(mapStateToProps)(CountingTask)