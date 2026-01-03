import { Route, Routes } from 'react-router'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/animes" element={<h1>Animes</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
    </Routes>
  )
}

export default App
