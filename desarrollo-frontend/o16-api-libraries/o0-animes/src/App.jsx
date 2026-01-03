import CardGrid from './components/CardGrid'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CardGrid />
      </main>
      <Footer />
    </>
  )
}

export default App
