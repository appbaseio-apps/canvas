import React from 'react'

export default () => {
  return (
    <div className="Logo">
      <img src="img/legos.svg" alt="" />
      <span>Appbase Canvas</span>

      <style jsx>{`
        .Logo {
          display: flex;
          align-items: center;
          margin-right: 30px;
          margin-left: 15px;

          img {
            height: 20px;
            margin-right: 10px;
          }

          span {
            color: white;
            line-height: 50px;
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  )
}
