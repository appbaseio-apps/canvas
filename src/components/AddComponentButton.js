import React from 'react'

import {globalVars} from '../helpers'
import ComponentModal from './ComponentModal'

export default () => {
  const sayHello = () => {
    console.log('Hello!')
  }

  return (
    <div className="AddComponentButton">
      <button onClick={sayHello}>
        <img src="img/component.svg" alt="" />
        <span>Add Component</span>
      </button>

      <ComponentModal />

      <style jsx>{`
        .AddComponentButton {
          margin-right: auto;
          position: relative;

          button {
            background: ${globalVars.colors.accent};
            border: 0;
            height: 34px;
            margin-top: 8px;
            padding: 0 15px;
            display: flex;
            align-items: center;
            border-radius: 2px;
            cursor: pointer;

            &:hover {
              background: ${globalVars.colors.accentHover};
            }
          }

          img {
            height: 15px;
            margin-right: 10px;
          }

          span {
            font-size: 12px;
            color: white;
          }
        }
      `}</style>
    </div>
  )
}
