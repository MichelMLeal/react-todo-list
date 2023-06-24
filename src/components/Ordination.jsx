export const Ordination = ({ setSort }) => {
  return (
    <section>
      <label>Ordenar:</label>
      <section className='ordination-buttons'>
        <button
          type='button'
          onClick={() => {
            setSort('asc')
          }}
          aria-label='Ordenar em ordem alfabética crescente'
          role='button'
          aria-pressed='false'
        >
          Asc
        </button>
        <button
          type='button'
          onClick={() => {
            setSort('desc')
          }}
          aria-label='Ordenar em ordem alfabética decrescente'
          role='button'
          aria-pressed='false'
        >
          Desc
        </button>
      </section>
    </section>
  )
}
