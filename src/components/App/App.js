import { useEffect } from 'react'
import { Router, Switch, Route } from 'react-router'
import history from '../../services/history'
import { GAME } from '../../util/routes'
import Game from '../Game'
import Layout from '../Layout'

const App = ({ appMounted, appWillUnmount, t }) => {
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
            <Route exact path={GAME} component={Game} />
          </Layout>
        </Switch>
      </Router>
    </div>
  )
}

export default App
