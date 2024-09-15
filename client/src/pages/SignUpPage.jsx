import { Link } from 'react-router-dom'
import Logo from '/logo.svg'

const SignUpPage = () => {
  const handleSignUp = (e) => {
    e.preventDefault()
  }

  return (
    <div className='w-full h-screen hero-bg'>
      <header className='flex justify-between items-center mx-auto p-4 max-w-6xl'>
        <Link to={'/'}>
          <img src={Logo} alt='logo' className='w-52' />
        </Link>
      </header>

      <div className='flex justify-center items-center mx-3 mt-20'>
        <div className='space-y-6 bg-black/60 shadow-md p-8 rounded-lg w-full max-w-md'>
          <h1 className='mb-4 font-bold text-2xl text-center text-white'>
            Sign Up
          </h1>

          <form className='space-y-4' onSubmit={handleSignUp}>
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
                name='email'
                defaultValue='user@gmail.com'
              />
            </div>
            <div>
              <label
                htmlFor='username'
                className='block font-medium text-gray-300 text-sm'
              >
                Username
              </label>
              <input
                type='text'
                className='border-gray-700 bg-transparent mt-1 px-3 py-2 border rounded-md focus:ring w-full text-white focus:outline-none'
                placeholder='johndoe'
                id='username'
                name='username'
                defaultValue='user'
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
                defaultValue={121212}
                name='password'
                autoComplete='true'
              />
            </div>

            <button className='bg-red-600 hover:bg-red-700 py-2 rounded-md w-full font-semibold text-white'>
              Sign Up
            </button>
          </form>
          <div className='text-center text-gray-400'>
            Already a member?{' '}
            <Link to={'/login'} className='text-red-500 hover:underline'>
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
