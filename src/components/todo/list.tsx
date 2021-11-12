import React, { Dispatch, FC, SetStateAction } from 'react'

import TodoItem from './item'
import { Todo } from '../types'

type Props = {
  todos: Todo[]
  setTodos: Dispatch<SetStateAction<Todo[]>>
}

const TodoList: FC<Props> = ({ todos, setTodos }) => {
  const updateTodo = (updatedIndex: number) => (title: string) => {
    const updatedTodo: Todo = { title }
    setTodos(
      todos.map((todo, index) => (index === updatedIndex ? updatedTodo : todo)),
    )
  }

  const removeTodo = (index: number) => () => {
    setTodos((prevState) => prevState.splice(index, 1))
  }

  const renderTodos = () => {
    return todos.map((todo, index) => (
      <TodoItem
        key={`#todo-item-${index}`}
        todo={todo}
        editTodo={updateTodo(index)}
        removeTodo={removeTodo(index)}
      />
    ))
  }

  return (
    <div className="w-96 mt-9 flex flex-col space-y-2">{renderTodos()}</div>
  )
}

export default TodoList
