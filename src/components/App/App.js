import { useEffect } from 'react'
import { Router, Switch, Route } from 'react-router'
import history from '../../services/history'
import { HOME, LOGIN, GAME } from '../../util/routes'
import Login from '../Login'
import Home from '../Home'
import Game from '../Game'
import Layout from '../Layout'

const App = ({ appMounted, appWillUnmount, value, changeValue, t }) => {
  useEffect(() => {
    appMounted()
    return () => {
      appWillUnmount()
    }
  }, [appMounted, appWillUnmount])

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Layout>
            <Route exact path={HOME} component={Home} />
            <Route exact path={GAME} component={Game} />
            <Route exact path={LOGIN} component={Login} />
          </Layout>
        </Switch>
      </Router>
    </div>
  )
}

export default App
