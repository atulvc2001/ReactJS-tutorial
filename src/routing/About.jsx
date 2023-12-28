// import React from 'react'
// import Header from './Header'
// import { useNavigate } from 'react-router-dom'

// const About = () => {
  
// let navigate = useNavigate()

//   let gotocontact = () => {
//     navigate("/contact")
//   }

//   let gotopreviouspage = () => {
//     navigate(-1)
//   }
  
//   return (
//     <>
//         <Header />
//         <h1>about</h1>
//         <button onClick={gotocontact}>Got to Contact</button>
//         <button onClick={gotopreviouspage}>Previous page</button>
//     </>
//   )
// }

// export default About

import React from 'react'
import Header from './Header'
// import { useNavigate } from 'react-router-dom'

const About = () => {
  

  return (
    <>
        <Header />
        <h1>about</h1>
    </>
  )
}

export default About
