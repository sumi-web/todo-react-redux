export const changeTodoData = (key, value) => {
  return {
    type: "CHANGE_TODO_DATA",
    payload: {
      key,
      value
    }
  }
}

export const addTodo = todo => {
  return {
    type: "ADD_TODO",
    payload: todo
  }
}

export const editTodo = (value) => {
  return {
    type: "EDIT_TODO",
    payload: value
  }
}

export const removeTodo = key => {
  return {
    type: "REMOVE_TODO",
    payload: key
  }
}

export const toggleCheckBox = (id, value) => {
  return {
    type: "TOGGLE_CHECKBOX",
    payload: {
      id,
      value
    }
  }
}

// export const filterTodo = (value) => {
//   return {
//     type: "FILTER_TODO",
//     payload: value
//   }
// }