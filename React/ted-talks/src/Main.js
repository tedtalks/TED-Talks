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
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Intro}/>
      <Route path={`${process.env.PUBLIC_URL}/tags`} component={Tags}/>
      <Route path={`${process.env.PUBLIC_URL}/transcripts`} component={Transcripts}/>
      <Route path={`${process.env.PUBLIC_URL}/notebook`} component={Notebook}/>
      <Route path={`${process.env.PUBLIC_URL}/references`} component={References}/>
    </Switch>
  </main>;

export default Main;