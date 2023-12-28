import React from 'react'

const Button = (props) => {
  return (
    <>
        <button onClick={props.fun}>{props.children}</button>
    </>
  )
}

export default React.memo(Button)
