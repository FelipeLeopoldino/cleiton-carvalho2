import { Link } from 'react-scroll'
import './Topbar.css'

export default function Topbar() {
  return (
    <nav className="navbar">
      <ul className="navMenu">
        <li>
          <Link
            activeClass="active"
            to="topSection"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="mentalCoach"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            mental coach
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="servicos"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            serviços
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="depoimentos"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            depoimentos
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contato"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contato
          </Link>
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
