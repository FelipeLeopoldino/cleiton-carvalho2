import Reveal from 'react-reveal/Reveal'
import Autoridade from './components/Autoridade'
import Carrossel from './components/Carrossel'
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
      <Reveal>
        <TopSection />
        <Autoridade />
        <MentalCoach />
        <Servicos />
        <Depoimentos />
        <Carrossel />
        <Contatos />
      </Reveal>
      <Footer />
    </div>
  )
}

export default App
