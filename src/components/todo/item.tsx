import React, { FC, useEffect, useState } from 'react'
import Input from '../input'

import { Todo } from '../types'

type Props = {
  todo: Todo
  editTodo: (title: string) => void
  removeTodo: () => void
}

const TodoItem: FC<Props> = ({ todo, editTodo, removeTodo }) => {
  const [todoTitle, setTodoTitle] = useState(todo.title)
  const [isEditable, setIsEditable] = useState(false)

  useEffect(() => {
    setTodoTitle(todo.title)
  }, [todo])

  const edit = () => setIsEditable(true)
  const cancelEdit = () => setIsEditable(false)

  const handleEdit = () => {
    if (todoTitle !== '') {
      editTodo(todoTitle)
    }

    setIsEditable(false)
  }

  return (
    <div className="w-full flex flex-row justify-between items-center border border-gray-200 rounded-lg shadow-sm px-3 py-2">
      {!isEditable && (
        <h6 className="text-gray-800 font-medium text-lg">{todo.title}</h6>
      )}
      {isEditable && (
        <Input
          width="w-48"
          name="title"
          value={todoTitle}
          setValue={setTodoTitle}
        />
      )}
      <div className="space-x-2">
        {!isEditable && (
          <>
            <button
              className="w-16 text-gray-800 border-2 border-gray-500 px-2 py-1 rounded-md outline-none"
              onClick={edit}
            >
              Edit
            </button>
            <button
              className="w-16 text-gray-800 px-2 py-1 rounded-md outline-none"
              onClick={removeTodo}
            >
              Delete
            </button>
          </>
        )}
        {isEditable && (
          <>
            <button
              className="w-16 text-gray-800 border-2 border-gray-500 px-2 py-1 rounded-md outline-none"
              onClick={handleEdit}
            >
              Save
            </button>
            <button
              className="w-16 text-gray-800 px-2 py-1 rounded-md outline-none"
              onClick={cancelEdit}
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default TodoItem
