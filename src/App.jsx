import Navbar from '@components/Navbar'
import Hero from '@sections/Hero'
import About from '@sections/About'
import Travels from '@sections/Travels'
import Footer from '@components/Footer'
import Modalities from '@sections/Modilities'

const App = () => {
  return (
    <div className="font-montserrat">
      <Navbar />
      <Hero />
      <About/>
      <Travels/>
      <Modalities/>
      <Footer/>
    </div>
  )
}

export default App