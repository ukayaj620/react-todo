import React, { FC, FormEvent, useState } from 'react'

import { Todo } from './components/types'

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [todoTitle, setTodoTitle] = useState('')

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setTodoTitle(e.currentTarget.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const todo: Todo = {
      title: todoTitle,
    }
    setTodos((prevState) => [...prevState, todo])
    setTodoTitle('')
  }

  const renderTodos = () => {
    return todos.map((todo, index) => (
      <div key={`#todo-${index}`}>{todo.title}</div>
    ))
  }

  return (
    <div className="w-screen flex flex-col items-center">
      <form className="w-96 mt-9" onSubmit={handleSubmit}>
        <input
          className="w-5/6 border-2"
          name="title"
          value={todoTitle}
          onChange={handleInput}
        />
      </form>
      <div className="w-96 mt-9 flex flex-col space-y-2">{renderTodos()}</div>
    </div>
  )
}

export default App
