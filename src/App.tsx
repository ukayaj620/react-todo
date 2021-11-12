import React, { FC, FormEvent, useState } from 'react'

import Input from './components/input'
import { Todo } from './components/types'

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [todoTitle, setTodoTitle] = useState<string>('')

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
        <Input name="title" value={todoTitle} setValue={setTodoTitle} />
      </form>
      <div className="w-96 mt-9 flex flex-col space-y-2">{renderTodos()}</div>
    </div>
  )
}

export default App
