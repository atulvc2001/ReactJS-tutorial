// 
// import React,{ useContext } from 'react'
// import { GlobalContext }  from './GlobalContextApi';
// const GrandChild = () => {
  
//     let consumer = useContext(GlobalContext);
  
//     return (
//     <>
//       <h1>{consumer.message}</h1>
//       <h1>{consumer.age}</h1>
//     </>
//   )
// }

// export default GrandChild

import React from 'react'
import HOC from './HOC'


const GrandChild = (props) => {
  console.log(props)
  return (
    <div>
      Grandchild component
    </div>
  )
}

export default HOC(GrandChild)

