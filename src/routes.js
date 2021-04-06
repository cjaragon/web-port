import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './components/about'
import Contact from './components/contact'
import Main from './components/main'
import Portfolio from './components/portfolio'

export default (
    <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
    </Switch>
)