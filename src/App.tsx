import React, { FC, FormEvent, useState } from 'react'

import Input from './components/input'
import TodoList from './components/todo/list'
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

  return (
    <div className="w-screen flex flex-col items-center">
      <form className="w-96 mt-9" onSubmit={handleSubmit}>
        <Input name="title" value={todoTitle} setValue={setTodoTitle} />
      </form>
      <TodoList todos={todos} />
    </div>
  )
}

export default App
