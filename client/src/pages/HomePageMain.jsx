import { useAuthStore } from '../zustand/useAuthStore'

const HomePageMain = () => {
  const { logout } = useAuthStore()

  return (
    <div>
      <button
        className='bg-red-600 hover:bg-red-700 py-2 rounded-md w-full font-semibold text-white'
        onClick={() => logout()}
      >
        Logout{' '}
      </button>
    </div>
  )
}
export default HomePageMain
