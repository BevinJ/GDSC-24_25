import './index.css'
import Navbar from './components/Navbar'
import Maincont from './components/Maincont'
import Secondmain from './components/Secondmain'
import Footer from './components/Footer'


function App() {
  return (
    <div className='dark:bg-black' > 
      <Navbar />
      <Maincont />
      <Secondmain />
      <Footer />
    </div>
  )
}
export default App
