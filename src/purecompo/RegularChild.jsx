// import React, { Component } from 'react'

// export default class RegularChild extends Component {
//   render() {
//     console.log("Regular Child is rendering")
//     return (
//       <>
//         <h1>{this.props.dish}</h1>
//       </>
//     )
//   }
// }

// Memo

import React from 'react'

const RegularChild = (props) => {
    console.log(props)
    console.log("Regular child compo is rendering")
    return (
    <>
        <h1>Shreya, your {props.animal} is Cute</h1>
    </>
  )
}

export default RegularChild
