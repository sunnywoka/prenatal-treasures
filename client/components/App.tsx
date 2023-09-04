import Nav from './Nav.tsx'

import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <h1>Prenantal Treasures</h1>
      </div>
      <div>
        <Nav />
        <Outlet />
      </div>
    </>
  )
}

export default App
