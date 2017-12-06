import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Intro from './Intro'
import Tags from './Tags'
import Transcripts from './Transcripts'
import Notebook from './Notebook'
import References from './References'

const Main = () =>
  <main>
    <Switch>
      <Route exact path='/' component={Intro}/>
      <Route path='/tags' component={Tags}/>
      <Route path='/transcripts' component={Transcripts}/>
      <Route path='/notebook' component={Notebook}/>
      <Route path='/references' component={References}/>
    </Switch>
  </main>;

export default Main;
