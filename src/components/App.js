import React, {Component} from 'react'

import Topbar from './Topbar'
import Canvas from './Canvas'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      modal: ''
    }
  }

  render() {
    return (
      <div>
        <Topbar />
        <Canvas />
      </div>
    )
  }
}
