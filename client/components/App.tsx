import { useItems } from '../hooks/useItems.ts'

function App() {
  // const { data } = useQuery(['todos'], getAllItems)
  const { data } = useItems()

  return (
    <>
      <div className="app">
        <h1>Prenantal Treasures</h1>
        <ul>
          {data && data.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
