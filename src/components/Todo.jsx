import './todo.css'
export const Todo = ({ todo, removeTask, completeTask }) => {
  return (
    <article key={todo.id} className='todo-item'>
      <section className='content'>
        <p className='title' style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
          {todo.text} <span className={`${todo.isCompleted ? 'task-complete' : ''}`} />
        </p>
        <p className='category'>{todo.category}</p>
      </section>
      <section className='todo-buttons'>
        <button
          className='complete'
          onClick={() => {
            completeTask(todo.id)
          }}
          aria-label={`Completar a tarefa: ${todo.text}`}
        >
          Completar
        </button>
        <button
          className='remove'
          onClick={() => {
            alert('Excluindo tarefa: ' + todo.text)
            removeTask(todo.id)
          }}
          aria-label={`Excluindo a tarefa: ${todo.text}`}
        >
          Excluir
        </button>
      </section>
    </article>
  )
}
