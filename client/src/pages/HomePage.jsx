import { useAuthStore } from '../zustand/useAuthStore'
import HomePageAuth from './HomePageAuth'
import HomePageMain from './HomePageMain'

const HomePage = () => {
  const { user } = useAuthStore()

  return <>{user ? <HomePageMain /> : <HomePageAuth />}</>
}
export default HomePage
