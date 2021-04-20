const initialState = {
  todos: [],
  text: "",
  todo_id: "",
  loader: false
}

export const todoAppReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state)

  if (action.type === "ADD_TODO") {
    //adding after edit todo
    if (!!state.todo_id) {
      newState.todos = state.todos.map(todo => todo.id === state.todo_id ? { ...todo, task: action.payload.task } : { ...todo })
      newState = { ...newState, todo_id: "", text: "" }
      return newState
    }
    // addding todo
    newState.todos = [...state.todos, action.payload]
    newState = { ...newState, todo_id: "", text: "" }
    return newState
  }
  if (action.type === "EDIT_TODO") {
    newState.text = action.payload
    return newState
  }

  if (action.type === "REMOVE_TODO") {
    newState.todos = [...state.todos.filter(todo => todo.id !== action.payload)]
    return newState
  }

  if (action.type === "CHANGE_TODO_DATA") {
    return { ...state, [action.payload.key]: action.payload.value }
  }

  if (action.type === "TOGGLE_CHECKBOX") {
    newState.todos = state.todos.map(todo => todo.id === action.payload.id ? { ...todo, completed: action.payload.value } : { ...todo })
    return newState
  }

  // if (action.type === "FILTER_TODO") {
  //   console.log("filter_todo", action)
  //   if (action.payload === "active") {
  //     newState.todos = state.todos.filter(todo => todo.completed === false)
  //     return newState
  //   } else if (action.payload === "completed") {
  //     newState.todos = state.todos.filter(todo => todo.completed === true)
  //   } else {
  //     return newState
  //   }
  // }

  return state
}