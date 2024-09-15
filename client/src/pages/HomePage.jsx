import HomeScreen from './HomeScreen'
import HomeAuthScreen from './HomeAuthScreen'

const HomePage = () => {
  const user = false

  // If user is logged in, display the HomeScreen component, otherwise display the AuthScreen component
  return <>{user ? <HomeScreen /> : <HomeAuthScreen />}</>
}

export default HomePage
