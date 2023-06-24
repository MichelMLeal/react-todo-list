import './todo.css'
export const Todo = ({ todo, removeTask, completeTask }) => {
  return (
    <div key={todo.id} className='todo-item'>
      <div className='content'>
        <p className='title' style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
          {todo.text} <span className={`${todo.isCompleted ? 'task-complete' : ''}`} />
        </p>
        <p className='category'>{todo.category}</p>
      </div>
      <div className='todo-buttons'>
        <button
          className='complete'
          onClick={() => {
            completeTask(todo.id)
          }}
        >
          Completar
        </button>
        <button
          className='remove'
          onClick={() => {
            alert('Excluindo tarefa: ' + todo.text)
            removeTask(todo.id)
          }}
        >
          Excluir
        </button>
      </div>
    </div>
  )
}
