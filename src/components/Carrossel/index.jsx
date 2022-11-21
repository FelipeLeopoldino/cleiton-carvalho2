import './Carrossel.css'

const atletas = [
  { id: 1, nome: 'Andrew', image: './image/andrew.svg' },
  { id: 2, nome: 'Figeuiredo', image: './image/figueiredo.svg' },
  { id: 3, nome: 'Giovanni', image: './image/giovanni.svg' },
  { id: 4, nome: 'Pituca', image: './image/pituca.svg' },
  { id: 5, nome: 'Pepe Firmino', image: './image/pepefirmino.svg' }
]

export default function Carrossel() {
  return (
    <section className="carrossel">
      <div className="titleCarrossel">
        <h2>atletas com mentalidade de campeão</h2>
      </div>
      <div className="imagemCarrossel">
        {atletas.map(atleta => {
          return <img key={atleta.id} src={atleta.image} alt={atleta.nome} />
        })}
      </div>
    </section>
  )
}
