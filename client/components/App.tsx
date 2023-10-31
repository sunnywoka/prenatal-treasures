import { useEffect } from 'react'
import Nav from './Nav.tsx'
import { Outlet, useLocation } from 'react-router-dom'

function App() {
  const { pathname } = useLocation()

  function editPathName(path: string) {
    const pathName = path.slice(1)

    if (pathName == '') return 'Prenantal Treasures'

    if (pathName.includes('-')) {
      const pathNameArray = pathName.replace('-', ' ').split(' ')
      return pathNameArray
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }

    return pathName.charAt(0).toUpperCase() + pathName.slice(1)
  }

  useEffect(() => {
    document.title = editPathName(pathname)
  }, [pathname])

  return (
    <>
      <div>
        <h1 className="text-center text-6xl font-bold underline ">
          Prenantal Treasures
        </h1>
      </div>
      <div className="text-center">
        <Nav />
        <Outlet />
      </div>
    </>
  )
}

export default App
