import { useEffect } from 'react'
import { Router, Switch, Route } from 'react-router'
import history from '../../services/history'
import { HOME, LOGIN } from '../../util/routes'
import Login from '../Login'
import Home from '../Home'
const App = ({ appMounted, appWillUnmount, value, changeValue, t }) => {
  useEffect(() => {
    appMounted()
    return () => {
      appWillUnmount()
    }
  }, [appMounted, appWillUnmount])

  return (
    <div className='App'>
      {t('authentication.wellcome')}
      <div>
        {value}
        <button onClick={changeValue}>Change Value</button>
      </div>
      <Router history={history}>
        <Switch>
          <Route exact path={HOME} component={Home} />
          <Route exact path={LOGIN} component={Login} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
