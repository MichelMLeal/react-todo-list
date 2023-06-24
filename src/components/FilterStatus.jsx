export const FilterStatus = ({ statusFilter, setStatusFilter }) => {
  return (
    <div className='search'>
      <h3>Status:</h3>
      <select
        name='slt_status'
        id='slt_status'
        onChange={e => {
          setStatusFilter(e.target.value)
        }}
        value={statusFilter}
      >
        <option value=''>Todos</option>
        <option value='false'>Em andamento</option>
        <option value='true'>Concluído</option>
      </select>
    </div>
  )
}
