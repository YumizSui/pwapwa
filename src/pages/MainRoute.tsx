import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './landing/Landing'
import App from './app/App'
import CounterPage from './counter/Counter'
import TimerPage from './timer/Timer'

const MainRoute = (): JSX.Element => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/app" component={App} />
      <Route exact path="/counter" component={CounterPage} />
      <Route exact path="/timer" component={TimerPage} />
    </Switch>
  </Router>
)

export default MainRoute
