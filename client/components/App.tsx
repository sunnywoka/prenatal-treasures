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
        <h1 className="text-center 2xl:text-6xl xl:text-5xl lg:text-5xl md:text-4xl text-3xl font-bold underline">
          Prenantal Treasures
        </h1>
      </div>
      <div className="text-center lg:text-base md:text-base text-xs">
        <Nav />
        <Outlet />
      </div>
    </>
  )
}

export default App
