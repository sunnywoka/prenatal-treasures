import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <nav className="m-2">
        <Link
          to="/"
          className="m-2 border-2 border-green-500 bg-green-300 hover:bg-green-400"
        >
          Home
        </Link>{' '}
        |{' '}
        <Link
          to="/about"
          className="m-2 border-2 border-green-500 bg-green-300 hover:bg-green-400"
        >
          About
        </Link>{' '}
        |{' '}
        <Link
          to="/special-thanks"
          className="m-2 border-2 border-green-500 bg-green-300 hover:bg-green-400"
        >
          Special Thanks
        </Link>
      </nav>
    </>
  )
}

export default Nav
