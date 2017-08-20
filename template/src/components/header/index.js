import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import style from './style.css'

class Header extends Component {
  render() {
    return h('header', { class: style.header }, [
      h('h1', {}, 'Preact Application'),
      h('nav', {}, [
        h(Link, { activeClassName: style.active, href: '/' }, 'Home'),
      ]),
    ])
  }
}

export default Header
