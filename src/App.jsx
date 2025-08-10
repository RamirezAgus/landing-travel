import Navbar from '@components/Navbar'
import Hero from '@sections/Hero'
import About from '@sections/About'
import Footer from '@components/Footer'

const App = () => {
  return (
    <div className="font-montserrat">
      <Navbar />
      <Hero />
      <About/>
      <Footer/>
    </div>
  )
}

export default App