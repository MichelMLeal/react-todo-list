export const Search = ({ search, setSearch }) => {
  return (
    <section className='search'>
      <label htmlFor='ipt_search'>Procurar:</label>
      <input
        type='text'
        name='ipt_search'
        id='ipt_search'
        placeholder='Digite o título para pesquisar tarefas'
        onChange={e => {
          setSearch(e.target.value)
        }}
        value={search}
        aria-label='Procurar por título das tarefas'
      />
    </section>
  )
}
