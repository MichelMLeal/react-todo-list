import { useState } from 'react'
import './App.css'
import { Todo } from './components/todo'
import { TodoForm } from './components/TodoForm'
import { Search } from './components/Search'
import { FilterStatus } from './components/FilterStatus'
import { Ordination } from './components/Ordination'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'React',
      category: 'wip',
      isCompleted: false
    },
    {
      id: 2,
      text: 'React Native',
      category: 'wip',
      isCompleted: true
    },
    {
      id: 3,
      text: 'Vue',
      category: 'wip',
      isCompleted: false
    }
  ])

  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [sort, setSort] = useState('')

  const addTask = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.random(),
        text,
        category,
        isCompleted: false
      }
    ]
    setTodos(newTodos)
  }

  const removeTask = id => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const completeTask = id => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted
      }
      return todo
    })
    console.log(newTodos)
    setTodos(newTodos)
  }

  return (
    <>
      <main className='app'>
        <h1>Lista de tarefas</h1>
        <article className='filters'>
          <Search search={search} setSearch={setSearch} />
          <FilterStatus statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
          <Ordination setSort={setSort} />
        </article>
        <hr />
        <section className='todo-list'>
          {todos
            .filter(todo => (statusFilter ? todo.isCompleted.toString() === statusFilter : true))
            .filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => (sort === 'asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)))
            .map(todo => (
              <Todo key={todo.id} todo={todo} removeTask={removeTask} completeTask={completeTask} />
            ))}
        </section>
        <hr />
        <TodoForm addTask={addTask} />
      </main>
    </>
  )
}

export default App
