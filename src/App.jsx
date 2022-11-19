import Autoridade from './components/Autoridade'
import Carrossel from './components/carrossel'
import Contatos from './components/Contatos'
import Depoimentos from './components/Depoimentos'
import Footer from './components/Footer'
import MentalCoach from './components/MentalCoach'
import Servicos from './components/Serviços'
import Topbar from './components/Topbar'
import TopSection from './components/Topsection'

function App() {
  return (
    <div className="App">
      <Topbar />
      <TopSection />
      <Autoridade />
      <MentalCoach />
      <Servicos />
      <Depoimentos />
      <Carrossel />
      <Contatos/>
      <Footer/>
    </div>
  )
}

export default App
