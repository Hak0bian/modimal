import Layout from './components/Layout/Layout'
import { Routes, Route } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage, ShopAllPage } from './pages'

function App() {
  return (
    <section className="font-montserrat text-black">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/shop-all' element={<ShopAllPage />} />
        </Route>
      </Routes>
    </section>
  )
}

export default App
