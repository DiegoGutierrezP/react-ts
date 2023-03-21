import React from 'react'
import { useTodos } from '../hooks/useTodos'

export const Titlte = () => {

    const {pendingTodos} = useTodos();

  return (
    <>
        <h1>
            Todos: { pendingTodos.length }
        </h1>
    </>
  )
}
