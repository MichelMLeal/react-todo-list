export const FilterStatus = ({ statusFilter, setStatusFilter }) => {
  return (
    <section className='search'>
      <label htmlFor='slt_status'>Status:</label>
      <select
        name='slt_status'
        id='slt_status'
        onChange={e => {
          setStatusFilter(e.target.value)
        }}
        value={statusFilter}
        aria-label='Filtrar por status das tarefas'
      >
        <option value=''>Todos</option>
        <option value='false'>Em andamento</option>
        <option value='true'>Concluído</option>
      </select>
    </section>
  )
}
