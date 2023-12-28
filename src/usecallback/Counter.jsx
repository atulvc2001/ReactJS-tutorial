import React from 'react'

const Counter = (props) => {
  console.log(props)
    return (
    <div>
      {props.send}
    </div>
  )
}

export default React.memo(Counter)
