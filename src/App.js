import './config/ReactotronConfig'
import './styles/global.scss'

import { Router } from 'react-router-dom';
import { Provider } from 'react-redux'

import Routes from './routes';

import { Header } from './components/Header'


import store from './store'
import history from './services/history'

function App() {
  return(
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
    </Provider>
  )
}

export default App;
