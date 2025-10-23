
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import './App.css'
import { HomePage } from './pages'

function App() {

  return (
    <section>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage />}/>

          
        </Route>
      </Routes>

    </section>
  )
}

export default App
