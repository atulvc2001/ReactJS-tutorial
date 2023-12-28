// import React from "react"

// let Child = () => {

//     return (
//         <>
//             <h1>Hello Students</h1>
//             <h1>yyou are all doing well</h1>
//         </>
//     )
// }

// export default Child

// !Props
// import React from 'react'

// const child = (props) => {
//     console.log(props)
//     let {name,age} = props
//   return (
//     <>
//         {name}
//         <br />
//         {age}
//     </>
//   )
// }

// export default child

// import React from 'react'

// const child = (props) => {
//     console.log(props)
// 0
//   return (
//     <>
//         {name}
//         <br />
//         {age}
//     </>
//   )
// }

// export default child


// import React from 'react'

// const child = (props) => {
//   console.log(props);
//   let {send:{name,price,img}} = props
//   return (
//     <>
//       {name}
//       <div>
//       <img src={img} alt="" height="150px" width="150px" />

//       </div>
//       Amount: {price}
//     </>
//   )
// }

// export default child

// import React from 'react'

// const child = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default child

// import React from 'react'

// const Child = (props) => {
//   console.log(props);

//   return (
//     <>
//       <h1>{props.children}</h1>
//     </>
//   )
// }

// export default Child

// import React from 'react'
// import prop from "prop-types`"

// const Child = (props) => {
//   return (
//     <>
//       {props.name}
//       {props.age}
//     </>
//   )
// }

// export default Child

// // Child.defaultProps = {
// //   color:"red"
// // }

// Child.propTypes = {
//   name: props.string,
//   age:props.number
// }


// Props drilling

// import React from 'react'
// import GrandChild from './GrandChild'
// const Child = (childprops) => {
//   console.log(childprops)
//   return (
//     <>
//       <GrandChild send={childprops.name}/>
//     </>
//   )
// }

// export default Child

// life cycle - unmounting phase

// import React, { Component } from 'react'

// export default class child extends Component {
  
//   componentWillMount(){
//     console.log("unmounting phase");
//   }
  
//   render() {
//     return (
//       <div>
//         Child component is executing
//       </div>
//     )
//   }
// }

// useEffect hook --> unmounting

// import React,{useEffect} from 'react'

// function child() {
//   useEffect(
//     () => {
//       return () = > {

//         console.log("unmounting child");
//       }
//     }
//   )
//   return (
//     <div>child</div>
//   )
// }

// export default child

// ERROR DETECTION

// import React from 'react'

// const child = (props) => {
//   console.log(props)
//   let { money } = props

//   if(money>=20000) {
//     throw new Error("PhonePay Crashed")
//   }

//   return (
//     <>
//       <h1>Sent Rs {money}</h1>
//     </>
//   )
// }

// export default child


// NEXT TOPIC - Pure COMPONENTS
// NEXT TOPIC - Pure COMPONENTS
// NEXT TOPIC - Pure COMPONENTS
// NEXT TOPIC - Pure COMPONENTS

import React from 'react'

const child = () => {
  return (
    <div>
      
    </div>
  )
}

export default child
