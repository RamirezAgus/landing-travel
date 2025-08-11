import Navbar from '@components/Navbar'
import Hero from '@sections/Hero'
import About from '@sections/About'
import Travels from '@sections/Travels'
import Footer from '@components/Footer'

const App = () => {
  return (
    <div className="font-montserrat">
      <Navbar />
      <Hero />
      <About/>
      <Travels/>
      <Footer/>
    </div>
  )
}

export default App