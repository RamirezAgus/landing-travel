import Navbar from '@components/Navbar'
import Hero from '@sections/Hero'
import About from '@sections/About'
import Travels from '@sections/Travels'
import Footer from '@components/Footer'
import Modalities from '@sections/Modilities'
import Packs from '@sections/Packs'
import Insights from '@sections/Insights'

const App = () => {
  return (
    <div className="font-montserrat overflow-hidden pt-[120px]">
      <Navbar />
      <Hero />
      <div id='about'><About/></div>
      <div id='travels'><Travels/></div>
      <div id='modalities'><Modalities/></div>
      <div id='packs'><Packs/></div>
      <div id='insights'><Insights/></div>
      <Footer/>
    </div>
  )
}

export default App