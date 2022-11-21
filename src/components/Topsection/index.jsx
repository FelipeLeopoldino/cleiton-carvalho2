import './Topsection.css'

export default function TopSection() {
  return (
    <main>
      <div id='topSection' className="topSection">
        <div className="topLeft">
          <div className="titleTop">
            <h1>cleiton carvalho</h1>
            <h3>Mentalidade de Campeão</h3>
          </div>
          <div className="topAbout">
            <p>
              Sou formado em Coach desde 2016 pela Federação Brasileira de
              Coaching Integral Sistêmico, especializado em Inteligência
              Emocional e leader coach.
              <br />
              <br />
              Fui militar da Marinha do Brasil por 15 anos, instrutor de
              liderança e relações humanas, comandei jovens alunos ensinando-os
              disciplina, força mental e trabalho em equipe.
              <br />
              <br />
              Atuo no futebol desde 2017, atendi mais de 300 atletas, fiz mais
              de 3000 horas de sessões com atletas de grandes clubes no Brasil e
              Europa na base e profissional.
              <br />
              <br />
              Tornei-me um especialista em treinar mentalmente os atletas para
              serem campeões.
              <br />
              <br /> Minha missão é educar, gerar valores, transformar,
              desenvolver comportamentos e mentalidade de atletas levando-os a
              alta performance.
            </p>
          </div>
        </div>
        <div className="topImage">
          <img src="../image/cleiton1.png" alt="" />
        </div>
      </div>
    </main>
  )
}
