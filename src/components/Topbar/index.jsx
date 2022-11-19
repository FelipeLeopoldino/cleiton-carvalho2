import './Topbar.css'

export default function Topbar() {
  return (
    <nav className="navbar">
      <ul className="navMenu">
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="#servicos">serviços</a>
        </li>
        <li>
          <a href="#mentalCoach">mental coach</a>
        </li>
        <li>
          <a href="#depoimentos">depoimentos</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
        <button className="botaoTop">
          <img src="../image/whatsapp.svg" alt="WhatsApp" />
          <a
            href="https://api.whatsapp.com/send?phone=5521972680407&text=Quero%20ter%20mentalidade%20de%20campe%C3%A3o"
            target="_blank"
          >
            WhatsApp
          </a>
        </button>
      </ul>
    </nav>
  )
}
