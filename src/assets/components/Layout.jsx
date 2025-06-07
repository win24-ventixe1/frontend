import { Link } from 'react-router-dom'
import VentixeSymbol from '../images/VentixeSymbol.svg'
import DashboardSymbol from '../images/DashboardSymbol.svg'
import EventsSymbol from '../images/EventsSymbol.svg'
import BookingsSymbol from '../images/BookingsSymbol.svg'

const Layout = ({ title, active, children }) => {
  return (
    <div className="wrapper">
      <aside className="sidebar">
        <div className="logotype">
          <img src={VentixeSymbol} alt="Ventixe Logotype" />
          <span className="logotypetext">Ventixe</span>
        </div>
        <nav className="nav">
          {[
            { to: '/', icon: DashboardSymbol, label: 'Dashboard' },
            { to: '/events', icon: EventsSymbol, label: 'Events' },
            { to: '/bookings', icon: BookingsSymbol, label: 'Bookings' }
          ].map(item => (
            <div key={item.to} className={`${item.label.toLowerCase()}-link`}>
              <img src={item.icon} alt={item.label} className={`img-${item.label.toLowerCase()}`} />
              <Link
                to={item.to}
                className={`navlink${active === item.label ? ' active' : ''}`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
      </aside>

      <header className="header">
        {title}
      </header>

      <main className="main">{children}</main>
    </div>
  )
}

export default Layout
