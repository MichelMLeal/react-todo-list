import './todoForm.css'

import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export const TodoForm = ({ addTask }) => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addTask(title, category)
    setTitle('')
    setCategory('')
  }

  return (
    <article className='todo-form'>
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='ipt_title'
          id='ipt_title'
          placeholder='Digite o título'
          onChange={e => setTitle(e.target.value)}
          value={title}
          aria-label='Digite o título da tarefa'
        />
        <select
          name='slt_categoty'
          id='slt_categoty'
          onChange={e => setCategory(e.target.value)}
          value={category}
          aria-label='Selecione uma categoria para a tarefa'
        >
          <option value=''>Selecione uma categoria</option>
          <option value='Trabalho'>Trabalho</option>
          <option value='Estudo'>Estudo</option>
          <option value='Outro'>Outro</option>
        </select>
        <button type='submit'>Criar Tarefa</button>
      </form>
    </article>
  )
}
