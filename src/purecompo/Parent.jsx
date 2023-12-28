// import React, { Component } from 'react'
// import RegularChild from './RegularChild'
// import PureChild from './PureChild'

// export default class Parent extends Component {
  
//     constructor(){
//         super()
//         this.state = {
//             food:"CB"
//         }
//     }

//     changefood = () => {
//         this.setState({food:"CT"})
//     }
  
//     render() {
//         console.log("Parent compo is rendering")
//     return (
//       <>

//         <RegularChild dish={this.state.food}/>
//         <PureChild dish={this.state.food}/>
//         <button onClick={this.changefood}>Change food</button>
//       </>
//     )
//   }
// }

// Memo

// import React, { useState } from 'react'
// import RegularChild from './RegularChild'
// import PureChild from './PureChild'

// const Parent = () => {
//   let [state, setState] = useState(
//     {
//         petname:"doggy"
//     }
//   )

//     let changeanimal = () => {
//         setState({petname:"doggy"})
//     }

//   console.log("Parent is rendering")
//     return (
//     <>
//         <RegularChild animal={state.petname}/>
//         <PureChild animal={state.petname} />
//         <button onClick={changeanimal}>other fav animal</button>
//     </>
//   )
// }

// export default Parent

// useMemo
// useMemo
// useMemo
// useMemo

import React,{ useState } from 'react'
import { useMemo } from 'react'

const Parent = () => {
  let [count1,setCount1] = useState(0)
  let [count2,setCount2] = useState(0)
  
  
  let Even = useMemo(() => {
    let i = 0
    while (i<1000000000) i++;
    return count1%2===0;
  }, [count1])
  
  let changecount1 = () => {
    setCount1(count1+1)
  }

  let changecount2 = () => {
    setCount2(count2+1)
  }

  return (
    <>
      <button onClick={changecount1}>count1 - {count1}</button>
      {Even?"Even":"Odd"}
      <button onClick={changecount2}>count2 - {count2}</button>
    </>
  )
}

export default Parent

