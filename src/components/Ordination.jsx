export const Ordination = ({ setSort }) => {
  return (
    <div>
      <h3>Ordenar:</h3>
      <div className='ordination-buttons'>
        <button
          type='button'
          onClick={() => {
            setSort('asc')
          }}
        >
          Asc
        </button>
        <button
          type='button'
          onClick={() => {
            setSort('desc')
          }}
        >
          Desc
        </button>
      </div>
    </div>
  )
}
