import { h, Component } from 'preact'
import style from './style.css'

class Home extends Component {
  render() {
    return h('div', { class: style.home }, [
      h('h1', {}, 'Home'),
      h('p', {}, 'This is the Home page.'),
    ])
  }
}

export default Home
