// Styles
import './App.css'

// Components
import { MenuProvider } from './providers'
import { Nav, Header, Main, Item } from './components'

function App() {
  const exampleItems = []

  for (let i = 0; i < 40; i++) exampleItems.push(i)

  return (
    <MenuProvider>
      <Nav />
      <Main>
        <Header />
        <ul className='list'>
          {exampleItems.map((item, index) => (
            <Item key={item} index={index} />
          ))}
        </ul>
      </Main>
    </MenuProvider>
  )
}

export default App
