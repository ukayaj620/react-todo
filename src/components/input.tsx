import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'

type Props = {
  name: string
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

const Input: FC<Props> = ({ name, value, setValue }) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  return (
    <input
      className="w-full border-2 border-gray-400 px-3 py-2 rounded-lg outline-none focus:ring-4 focus:ring-gray-200"
      name={name}
      value={value}
      onChange={handleInput}
    />
  )
}

export default Input
