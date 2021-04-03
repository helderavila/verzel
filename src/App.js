import './config/ReactotronConfig'
import './styles/global.scss'

import { Header } from './components/Header'
import { Home } from './pages/Home'

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return(
    <Provider store={store}>
      <Header />
      <Home />
    </Provider>
  )
}

export default App;
