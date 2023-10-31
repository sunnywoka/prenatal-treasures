import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <nav>
        <Link to="/" className="bg-green-400 hover:bg-green-500">
          Home
        </Link>{' '}
        |{' '}
        <Link to="/about" className="bg-green-400 hover:bg-green-500">
          About
        </Link>{' '}
        |{' '}
        <Link to="/special-thanks" className="bg-green-400 hover:bg-green-500">
          Special Thanks
        </Link>
      </nav>
    </>
  )
}

export default Nav
