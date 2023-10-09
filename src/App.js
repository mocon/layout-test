// Styles
import './App.css'

// Components
import { MenuProvider, ModalProvider } from './providers'
import { Nav, Header, Main, Item, Modal } from './components'

function App() {
  const exampleItems = []

  for (let i = 0; i < 40; i++) exampleItems.push(i)

  return (
    <MenuProvider>
      <ModalProvider>
        <Nav />
        <Main>
          <Header />
          <ul className='list'>
            {exampleItems.map((item, index) => (
              <Item key={item} index={index} />
            ))}
          </ul>
        </Main>
        <Modal />
      </ModalProvider>
    </MenuProvider>
  )
}

export default App
