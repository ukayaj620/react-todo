import React, { FC } from 'react'

import TodoItem from './item'
import { Todo } from '../types'

type Props = {
  todos: Todo[]
}

const TodoList: FC<Props> = ({ todos }) => {
  const renderTodos = () => {
    return todos.map((todo, index) => (
      <TodoItem key={`#todo-item-${index}`} todo={todo} />
    ))
  }

  return (
    <div className="w-96 mt-9 flex flex-col space-y-2">{renderTodos()}</div>
  )
}

export default TodoList
