import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{' '}
        <Link to="/thanks">Special Thanks</Link>
      </nav>
    </>
  )
}

export default Nav
