import Nav from './Nav.tsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <h1 className="text-center text-6xl font-bold underline ">
          Prenantal Treasures
        </h1>
      </div>
      <div>
        <Nav />
        <Outlet />
      </div>
    </>
  )
}

export default App
