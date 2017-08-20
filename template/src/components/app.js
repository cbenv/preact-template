import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Header from './header'
import Home from '../routes/home'

class Application extends Component {
  constructor() {
    super()
    this.handleRoute = this.handleRoute.bind(this)
  }

  handleRoute(event) {
    this.currentUrl = event.url
  }

  render() {
    return (
      h('div', { id: 'application' }, [
        h(Header),
        h(Router, { onchange: this.handleRoute }, [
          h(Home, { path: '/' }),
        ]),
      ])
    )
  }
}

export default Application
