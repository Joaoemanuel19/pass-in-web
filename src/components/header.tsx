import nlwUniteLogo from '../assets/nlw-unite-icon.svg'
import { NavLink } from './nav-link'

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwUniteLogo} alt="logo nlw unite" />

      <nav className="flex items-center gap-5">
        <NavLink href="/events">Eventos</NavLink>
        <NavLink href="/attendees">Participante</NavLink>
      </nav>
    </div>
  )
}