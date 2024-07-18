import React from 'react'

function Button({children,classname}) {
  return (
    <div>
        <button className={classname}>{children}</button>
    </div>
  )
}

export default Button