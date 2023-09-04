import { useItems } from '../hooks/useItems.ts'

function DisplayAllItems() {
  const { data } = useItems()

  return (
    <>
      <div>
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
