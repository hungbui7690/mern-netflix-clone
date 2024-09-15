import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage, SignUpPage, NotFoundPage } from './pages/'
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './zustand/useAuthStore'

function App() {
  const { user } = useAuthStore()

  return (
    <div className='flex mx-auto'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/login'
            element={!user ? <LoginPage /> : <Navigate to={'/'} />}
          />
          <Route
            path='/signup'
            element={!user ? <SignUpPage /> : <Navigate to={'/'} />}
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        toastOptions={{
          // Define default options
          className: '',
          duration: 2000,
        }}
      />
    </div>
  )
}

export default App
