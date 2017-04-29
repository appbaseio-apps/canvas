import React from 'react'

import {globalVars} from '../helpers'
import ComponentSearchResults from './ComponentSearchResults'

export default () => {
  return (
    <div className="ComponentModal">
      <input type="text" placeholder="Search for a component" />
      <ComponentSearchResults />

      <style jsx>{`
        .ComponentModal {
          position: absolute;
          border: 1px solid #eee;
          border-radius: 5px;
          top: 58px;
          padding: 5px;
          box-shadow: 0 3px 10px 0 rgba(0,0,0,.075);
          min-width: 200px;
          background: white;

          &::before {
            border: 6px solid #eee;
            top: -12px;
            left: 16px;
          }

          &::after {
            border: 5px solid white;
            top: -10px;
            left: 17px;
          }

          &::before,
          &::after {
            content: '';
            position: absolute;
            border-top-color: transparent;
            border-left-color: transparent;
            border-right-color: transparent;
          }

          input {
            width: 100%;
            border: 0;
            background: #f8f8f8;
            border-radius: 3px;
            padding: 5px 10px;
            font-size: 13px;
            border: 1px solid #eee;
            margin-bottom: 5px;

            &:focus {
              outline: none;
              border: 1px solid ${globalVars.colors.accentHover};
              background: #f5f5f5;
            }
          }
        }
      `}</style>
    </div>
  )
}
