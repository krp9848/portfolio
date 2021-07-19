import Container from './components/Container/Container'
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <Main />
      </Content>
    </Container>
  )
}

export default App
