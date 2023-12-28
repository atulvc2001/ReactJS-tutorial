// import React, { PureComponent } from 'react'


// // In pure components CBC inherits it's properties from built in 
// // components called PureComponents
// // PureComponents 
// export default class PureChild extends PureComponent {
//   render() {
//     console.log("pure compo")
//     return (
//         <>
//             <h1>this is the pure compo {this.props.dish}</h1>
//         </>
//     )
//   }
// }


// Memo
import React from 'react'
// import React,{memo} from 'react'  ---> you can write it like this too
// and write simply memo(PureChild)
const PureChild = (props) => {
    console.log("Pure Child compo is rendering")
    return (
    <>
        <h1>Shreya's pet animal is {props.animal}</h1>
    </>
  )
}

export default React.memo(PureChild)
