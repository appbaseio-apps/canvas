import React from 'react'
import {render} from 'react-dom'

import App from './components/App'

const Root = () => <App />

render(<Root />, document.querySelector('#root'))
