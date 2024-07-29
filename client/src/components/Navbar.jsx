import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='flex items-center justify-between p-3 sticky top-0'>
        <NavLink to='/' className=''>
          <h3 className='text-lg font-bold'>MERN App</h3>
        </NavLink>
        <nav className='flex gap-3'>
            <NavLink to='/' className=''>Home</NavLink>
            <NavLink to='/login' className=''>Login</NavLink>
            <NavLink to='/signup' className=''>Signup</NavLink>
            <NavLink to='/about' className=''>About</NavLink>
        </nav>
    </header>
  )
}

export default Navbar