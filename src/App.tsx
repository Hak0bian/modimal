
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import { HomePage } from './pages'

function App() {

  return (
    <section className="font-montserrat text-black">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage />}/>
          
        </Route>
      </Routes>

    </section>
  )
}

export default App
