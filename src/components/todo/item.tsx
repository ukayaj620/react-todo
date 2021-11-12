import React, { FC } from 'react'

import { Todo } from '../types'

type Props = {
  todo: Todo
}

const TodoItem: FC<Props> = ({ todo }) => {
  return (
    <div className="w-full border border-gray-100 rounded-lg shadow-md px-3 py-2">
      <h6 className="text-gray-800 font-medium text-lg">{todo.title}</h6>
    </div>
  )
}

export default TodoItem
