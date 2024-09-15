import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage, SignUpPage, NotFoundPage } from './pages/'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className='flex mx-auto max-w-6xl'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignUpPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  )
}

export default App
