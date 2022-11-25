import './Carrossel.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { useState } from 'react'

const atletas = [
  { id: 1, nome: 'Andrew-Gil Vicente-POR', image: './image/andrew.svg' },
  {
    id: 2,
    nome: 'Figueiredo - Vasco da Gama-BRa',
    image: './image/figueiredo.svg'
  },
  { id: 3, nome: 'Giovanni - ajax-hol', image: './image/giovanni.svg' },
  {
    id: 4,
    nome: 'diego Pituca - kashima antlers-jpn',
    image: './image/pituca.svg'
  },
  { id: 5, nome: 'Pepe Firmino - santos-bra', image: './image/pepefirmino.svg' }
]

export default function Carrossel() {
  const [scrollX, setScrollX] = useState(0)
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }
    setScrollX(x)
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    let listW = atletas.length * 320
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 320
    }
    setScrollX(x)
  }

  return (
    <>
      <div className="titleCarrossel">
        <h2>atletas com mentalidade de campeão</h2>
      </div>
      <section className="carrossel">
        <div className="movieRow--left" onClick={handleLeftArrow}>
          <NavigateBeforeIcon style={{ fontSize: 50 }} />
        </div>
        <div className="movieRow--right" onClick={handleRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }} />
        </div>
        <div
          className="imagemCarrossel"
          style={{ marginLeft: scrollX, width: atletas * 320 }}
        >
          {atletas.map(atleta => {
            return (
              <>
                <div>
                  <img key={atleta.id} src={atleta.image} alt={atleta.nome} />
                  <p key={atleta.nome}>{atleta.nome}</p>
                </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}
