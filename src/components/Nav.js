import React from 'react'

import {globalVars} from '../helpers'

export default () => {
  return (
    <nav>
      <a href="#">Help Chat</a>
      <a href="#">Learn</a>
      <a href="#">Settings</a>
      <a href="#">Log Out</a>

      <style jsx>{`
        nav {
          display: flex;
        }

        a {
          color: white;
          font-size: 12px;
          text-decoration: none;
          font-weight: bold;
          padding: 0 15px;
          height: 50px;
          line-height: 50px;
          display: block;

          &:hover {
            background: ${globalVars.colors.primaryHover};
          }
        }
      `}</style>
    </nav>
  )
}
