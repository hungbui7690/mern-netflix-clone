import { Link } from 'react-router-dom'
import Logo from '/logo.svg'

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault()
  }

  return (
    <div className='w-full h-screen hero-bg'>
      <header className='flex justify-between items-center mx-auto p-4 max-w-6xl'>
        <Link to={'/'}>
          <img src={Logo} alt='logo' className='w-52 text-red-500' />
        </Link>
      </header>

      <div className='flex justify-center items-center mx-3 mt-20'>
        <div className='space-y-6 bg-black/60 shadow-md p-8 rounded-lg w-full max-w-md'>
          <h1 className='mb-4 font-bold text-2xl text-center text-white'>
            Login
          </h1>

          <form className='space-y-4' onSubmit={handleLogin}>
            <div>
              <label
                htmlFor='email'
                className='block font-medium text-gray-300 text-sm'
              >
                Email
              </label>
              <input
                type='email'
                className='border-gray-700 bg-transparent mt-1 px-3 py-2 border rounded-md focus:ring w-full text-white focus:outline-none'
                placeholder='you@example.com'
                id='email'
              />
            </div>

            <div>
              <label
                htmlFor='password'
                className='block font-medium text-gray-300 text-sm'
              >
                Password
              </label>
              <input
                type='password'
                className='border-gray-700 bg-transparent mt-1 px-3 py-2 border rounded-md focus:ring w-full text-white focus:outline-none'
                placeholder='••••••••'
                id='password'
                autoComplete='true'
              />
            </div>

            <button className='bg-red-600 hover:bg-red-700 py-2 rounded-md w-full font-semibold text-white'>
              Login
            </button>
          </form>
          <div className='text-center text-gray-400'>
            {" Don't"} have an account?{' '}
            <Link to={'/signup'} className='text-red-500 hover:underline'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
