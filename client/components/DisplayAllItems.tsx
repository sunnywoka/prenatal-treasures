import { useItems } from '../hooks/useItems.ts'

function DisplayAllItems() {
  const { data } = useItems()

  return (
    <>
      <div className="app">
        <h1>Prenantal Treasures</h1>
        <ul>
          {data &&
            data.map((item) => (
              <li key={item.id}>
                <a href={item.where_to_buy}>{item.name}</a>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default DisplayAllItems
