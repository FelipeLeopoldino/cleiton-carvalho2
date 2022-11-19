import './Depoimentos.css'

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="depoimentos">
      <div className="titleDepoimento">
        <h2>Depoimentos</h2>
      </div>
      <div className="atletas">
        <div className="atleta1">
          <h4>giovanni</h4>
          <img
            src="../image/giovanni.svg"
            alt="Atleta Giovanni-Ajax-HOL"
            className="imgAtletas"
          />
          <p>
            Eu sou um Giovanni diferente de antes, meus pensamentos estão bem
            melhores, acredito muito mais em mim, tenho mais personalidade para
            fazer o que sei aqui no Ajax. Antes eu não acreditava no mental
            coaching, mas hoje vejo o quanto foi importante para meu
            crescimento.
          </p>
        </div>
        <div className="atleta2">
          <h4>figueiredo</h4>
          <img
            src="../image/figueiredo.svg"
            alt="Atleta Figueiredo-vasco da gama-BRA"
            className="imgAtletas"
          />
          <p>
            Minha dificuldade era manter o foco, e voltar para o jogo após um
            erro e hoje consigo lidar muito melhor com isso. Quando eu erro eu
            já penso na próxima jogada. Seu trabalho me passou confiança e me
            fez entender que era importante desenvolver minha mentalidade. Eu
            evolui muito como atleta e na minha vida pessoal. Tenho metas
            definidas, claras de curto, médio e longo prazo.
          </p>
        </div>
        <div className="atleta3">
          <h4>andrew</h4>
          <img
            src="../image/andrew.svg"
            alt="Atleta Andrew-Gil Vicente-POR"
            className="imgAtletas"
          />
          <p>
            Meu maior desafio antes do mental coaching era superar meus
            pensamentos negativos, traçar metas para saber onde chegar, ter foco
            e concentração. Hoje me sinto muito preparado mentalmente para tomar
            melhores decisões, muito mais disciplinado e com pensamentos
            positivos. Tenho clareza do que vou conquistar, serei um atleta de
            sucesso e um ser humano gigantesco.
          </p>
        </div>
      </div>
    </section>
  )
}
