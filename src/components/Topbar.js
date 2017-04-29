import React from 'react'

import {globalVars} from '../helpers'
import Logo from './Logo'
import AddComponentButton from './AddComponentButton'
import Nav from './Nav'

export default () => {
  return (
    <div className="TopBar">
      <Logo />
      <AddComponentButton />
      <Nav />

      <style jsx>{`
        .TopBar {
          display: flex;
          height: 50px;
          background: ${globalVars.colors.primary};
        }
      `}</style>
    </div>
  )
}
