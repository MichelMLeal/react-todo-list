export const Search = ({ search, setSearch }) => {
  return (
    <div className='search'>
      <h3>Procurar:</h3>
      <input
        type='text'
        name='ipt_search'
        id='ipt_search'
        placeholder='Digite o título para pesquisar'
        onChange={e => {
          setSearch(e.target.value)
        }}
        value={search}
      />
    </div>
  )
}
