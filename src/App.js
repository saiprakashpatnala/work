import {Switch, Route} from 'react-router-dom'
import HomeSection from './components/HomeSection'
import Success from './components/Success'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/home" component={HomeSection} />
      <Route exact path="/success" component={Success} />
    </Switch>
  </>
)

export default App
