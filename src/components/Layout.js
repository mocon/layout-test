import clsx from 'clsx'

import { useMenu } from '../providers'

export const Logo = () => (
  <div className='logo'>
    <a href='/'>
      <img src='/logo192.png' alt='Logo' />
    </a>
  </div>
)

// Side navigation
export const Nav = () => {
  const { isOpen, setIsOpen } = useMenu()

  const links = [
    { href: '/', text: 'Home' },
    { href: '/live', text: 'Live' },
    { href: '/bets', text: 'Bets' },
    { href: '/settings', text: 'Settings' },
  ]

  return (
    <>
      <nav className={clsx('nav', isOpen ? 'open' : 'closed')}>
        <Logo />
        <ul>
          {links.map(({ href, text }) => (
            <li key={href}>
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>
      </nav>
      {isOpen && (
        <button onClick={() => setIsOpen(!isOpen)} className='close-nav'>
          Close
        </button>
      )}
    </>
  )
}

// Header
export const Header = () => {
  const { isOpen, setIsOpen } = useMenu()

  return (
    <header className='header'>
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      <p>Header content</p>
    </header>
  )
}

// Main content
export const Main = ({ children }) => <main className='main'>{children}</main>
