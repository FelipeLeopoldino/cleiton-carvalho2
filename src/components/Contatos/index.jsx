import './Contatos.css'

export default function Contatos() {
  return (
    <section id="contato" className="contato">
      <div>
        <div className="titleContato">
          <h2>vem treinar sua mente</h2>
        </div>
        <div className="linksContato">
          <div className="email">
            <img src="../image/iconslinkedin.svg" alt="" />
            <a
              href={'https://www.linkedin.com/in/cleitoncarvalhocoach/'}
              target="_blank"
            >
              <h4>cleiton carvalho</h4>
            </a>
          </div>
          <div className="instagram">
            <img src="../image/instagram.svg" alt="" />
            <a
              href={'https://www.instagram.com/mentalidadedecampeaoo/'}
              target="_blank"
            >
              <h4>@mentalidadedecampeao</h4>
            </a>
          </div>
          <div className="youtube">
            <img src="../image/youtube.svg" alt="" />
            <a
              href={'https://www.youtube.com/c/MentalCoachCleitonCarvalho'}
              target="_blank"
            >
              <h4>cleiton carvalho - mental coach</h4>
            </a>
          </div>
        </div>

        <a
          href={
            'https://api.whatsapp.com/send?phone=5521972680407&text=Quero%20ter%20mentalidade%20de%20campe%C3%A3o'
          }
          target="_blank"
        >
          <button className="botaoContato">
            <img src="../image/whatsapp.svg" alt="" />
            WhatsApp
          </button>
        </a>
      </div>
      <div className="imagem">
        <img src="/image/cleiton3.png" alt="" />
      </div>
    </section>
  )
}
