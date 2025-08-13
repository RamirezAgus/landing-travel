import Navbar from '@components/Navbar'
import Hero from '@sections/Hero'
import About from '@sections/About'
import Travels from '@sections/Travels'
import Footer from '@components/Footer'
import Modalities from '@sections/Modilities'
import Packs from '@sections/Packs'

const App = () => {
  return (
    <div className="font-montserrat overflow-hidden">
      <Navbar />
      <Hero />
      <About/>
      <Travels/>
      <Modalities/>
      <Packs/>
      <Footer/>
    </div>
  )
}

export default App