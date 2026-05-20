import { Link } from 'react-router-dom'

function Navbar({ user, setUser }) {

  function logOut() {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <nav>

      {/* Public Routes */}
      <Link className='nav-item' to='/'>
        Homepage
      </Link>

      <Link className='nav-item' to='/universities'>
        Universities
      </Link>

      <Link className='nav-item' to='/scholarships'>
        Scholarships
      </Link>

      {user ? (
        <>
          {/* Protected Routes */}
          <Link className='nav-item' to='/profile'>
            Profile
          </Link>

          <Link className='nav-item' to='/my-applications'>
            My Applications
          </Link>

          <span className='nav-item'>
            {user.username}
          </span>

          <button
            className='nav-item'
            onClick={logOut}
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          {/* Guest Routes */}
          <Link className='nav-item' to='/sign-up'>
            Sign Up
          </Link>

          <Link className='nav-item' to='/sign-in'>
            Sign In
          </Link>
        </>
      )}

    </nav>
  )
}

export default Navbar