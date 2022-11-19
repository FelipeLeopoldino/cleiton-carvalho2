import './Topbar.css'

export default function Topbar() {
  return (
    <nav className="navbar">
      <ul className="navMenu">
        <li>home</li>
        <li>serviços</li>
        <li>mental coach</li>
        <li>depoimentos</li>
        <li>Contato</li>
        <button className='botaoTop'>
          <img src="../image/whatsapp.svg" alt="WhatsApp" />
          WhatsApp
        </button>
      </ul>
    </nav>
  )
}
