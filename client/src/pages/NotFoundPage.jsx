import { Link } from 'react-router-dom'
import NotFoundImg from '/404.svg'
import Logo from '/logo.svg'

const NotFoundPage = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-cover bg-center w-screen min-h-screen text-white'>
      <img src={NotFoundImg} alt='404' className='w-96' />
      <header className='top-0 left-0 absolute bg-black p-4 w-full'>
        <Link to={'/'}>
          <img src={Logo} alt='Netflix' className='h-8' />
        </Link>
      </header>
      <main className='z-10 text-center error-page--content'>
        <h1 className='mb-4 font-semibold text-7xl'>Lost your way?</h1>
        <p className='mb-6 text-xl'>
          Sorry, we {"can't"} find that page. {"You'll"} find lots to explore on
          the home page.
        </p>
        <Link
          to={'/'}
          className='bg-[#B91C1C] px-4 py-2 rounded font-bold text-white'
        >
          Netflix Home
        </Link>
      </main>
    </div>
  )
}

export default NotFoundPage
