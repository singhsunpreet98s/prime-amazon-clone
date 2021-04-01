import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Appbar from './components/pages/appbar/Appbar';
import Movie from './components/pages/Movie/Movie';
import Kids from './components/pages/kids/kids'
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Appbar />
      </Switch>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path='/props/:id' component={Movie} />
      </Switch>
      <Switch>
        <Route exact path='/kids' >
          <Kids />
        </Route>
      </Switch>
    </BrowserRouter >
  )
}
