
// import React, { Component } from "react"

// class App extends Component{
//     render() {
//         return <h1>CLass Based Component</h1>
//     }
// }

// export default App

// !Functional Based Component

// import React, { Fragment } from "react"

// const App = () => {
//     return <div>
//         <h1>This is a functional component </h1>
//         <h1>Hello there</h1>
//     </div>
// }
// to remove the extra div tag, we use fragments

// const App = () => {
//     let a = 10;
//     return (<>
//         <h1>This is a functional component </h1>
//         <br />
//         <input type="text" />
//         <h1>Hello there {a}</h1>
//     </ >);
// } 

// export default App

// import React from "react"
// import Child from "./Child"

// let App = () => {
//     return (
//         <>  
//             <Child/ >
//         </>
//     )
// }


// export default App

// import React from 'react'

// const App = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default App

// useState()

// import React, {useState} from 'react'

// const App = () => {
//     let [state,setState] = useState(1000)
//     let a = 10
//     let changename = () => {
//         setState(2000)
//     }
//     return(
//         <>
//             <h1>{a}</h1>
//             <h1>{state}</h1>
//             <button onClick={changename}>Change name</button>
//         </>
//     )
// }

// export default App

// import React,{useState} from "react"



// const App = () => {
//     let [num, setNum] = useState(1000)
//     let changenum = () => {
//         setNum(2000)
//     }
//   return (
//     <div>
//         <h1>{num}</h1>
//       <button onClick={changenum}>change the number</button>
//     </div>
//   )
// }

// export default App

// !Simple Counter

// import React, {useState} from 'react'



// const App = () => {

//   let [count ,setCount] = useState(0)

//   let counterup = () => {
//     setCount(count+1)
//   }
//   let counterdown = () => {
//     setCount(count-1)
//   }
//   let reset = () => {
//     setCount(0)
//   }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={counterup}>Up counter</button>
//       <button onClick={counterdown}>Down counter</button>
//       <button onClick={reset}>Up counter</button>
//     </div>
//   )
// }


// import React from 'react'
// import Child from './Child'

// const App = () => {
//   return (
//     <>
//       <Child name="Atul" age={24}/>
//     </>
//   )
// }

// export default App

// Sending state props
// import React,{useState} from 'react'
// import Child from './Child'

// const App = () => {
//   let [name,setName] = useState("Shah Rukh Khan")
//   return (
//     <>
//       <Child send={name}/>
//     </>
//   )
// }

// export default App

// import React, {useState}from 'react'
// import Child from './Child'

// const App = () => {
//   let [product,setProduct] = useState({
//     name:"printer",
//     price:10000,
//     img:"https://4.imimg.com/data4/GL/UP/MY-5812789/3-printer.jpg"
//   }) ;
//   return (
//     <>
//       <Child send={product} />
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Child from './Child'
// const App = () => {
//   let data = {
//     name:"snehasmitha"
//   }
//   return (
//     <>
//       <Child send={data}/>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Child from './Child'

// const App = () => {
//   return (
//     <>
//       <Child>
//         <p>We have to study daily</p>
//         <h1>ReactJs</h1>
//       </Child>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Child from './Child'

// const App = () => {
//   return (
//     <>
//       <Child name="Alex" age="23"/>
//     </>
//   )
// }

// export default App

// Props drilling

// import React,{useState} from 'react'
// import Child from './Child'

// const App = () => {
//   let [state, setState] = useState({
//     productname:'Kurta'
//   })
//   return (
//     <>
//       <Child name={state.productname}/>
//     </>
//   )
// }

// export default App

// Context Api

// import React from 'react'
// import GrandChild from './GrandChild'
// import GlobalContextApi from './GlobalContextApi'

// const App = () => {
//   return (
//     <>
//       <GlobalContextApi>
//         <GrandChild/>
//       </GlobalContextApi>
//     </>
//   )
// }


// export default App

// Higher order components
// import React from 'react'
// import GrandChild from './GrandChild'

// const App = () => {
//   return (
//     <>
//       <GrandChild/>
//     </>
//   )
// }

// export default App

// Inline CSS

// import React, {useState} from 'react'

// const App = () => {

//   let  [info, setInfo] = useState({
//     name: "Atul V Chandran",
//     age:24,
//     course:"Python Full Stack"
//   })
//   return (
//     <>

//       <section style = {{background:"red",height:"400px",width:"400px",padding:"20px",border:"2px solid red",borderRadius:"30px",fontStyle:"Italic"}}>
//         <h1>Name: {info.name}</h1>
//         <h1>Name: {info.age}</h1>
//         <h1>Name: {info.course}</h1>
//       </section>

//     </>
//   )
// }

// export default App

// GLOBAL CSS

// import React from 'react'

// const App = () => {
//   return (
//     <>
//       <h1 className='head'>
//         Dear Students, are you able to understand the concept
//       </h1>
//       <p className='para'>Respond Students...............</p>
//     </>
//   )
// }

// export default App

// module css

// import React from 'react'
// import Nav from './module/Nav.jsx'

// const App = () => {
//   return (
//     <>
//       <Nav/>
//     </>
//   )
// }

// export default App

// CONDITIONAL RENDERING

// import React,{useState} from 'react'

// const App = () => {
//   // let [isLoggedIn] = useState(false)

//   // if (isLoggedIn){
//   //   return <h1>Logged in successfully</h1>
//   // }
//   // else{
//   //   return <h1>Unable to log in</h1>
//   // }

//   let [display] = useState(true)

//   return (
//     <>
//       {display?<p>Displaying......</p>:<p>Not Dsiplaying.......</p>}
//     </>
//   )
// }

// export default App


// LOGICAL AND CIRCUIT WAY

// import React, {useState} from 'react'

// function App() {
//   let [age] = useState(20)
//   return (
//     <>
//       {age>=18 && <h1>U are eligible to vote</h1>}
//     </>
//   )
// }

// export default App




// import React from 'react';

// function App() {
//   let country = "India";

//   return (
//     <>
//       {country === "India" && <h1>You are an Indian</h1>}
//       {country === "China" && <h1>You are Chinese</h1>}
//       {country === "Australia" && <h1>You are an American</h1>}
//       {country === "America" && <h1>You are an Australian</h1>}
//     </>
//   );
// }

// export default App;


// Task -->  Toggle the content

// import React,{useState} from 'react'

// const App = () => {
//   let [toggle, setToggle] = useState(false)

//   let toggleContent = () => {
//     setToggle(!toggle)
//   }
//   return (
//     <>
//       <h1>{toggle?"HTML":"Hyper Text Markup Language"}</h1>
//       <button onClick={toggleContent}>Change mood</button>
//     </>
//   )
// }

// export default App


// Task --> Toggle the background color

// import React from 'react'
// import {useState} from 'react'

// const App = () => {
//   let [theme, setTheme] = useState(false)

//   let toggletheme = () => {
//     setTheme(!theme)
//   }

//   // Declaring once functional component so first letter capital
//   let ChangeColor = () => {
//     if (theme) {
//       document.body.className = "dark"
//     }
//     else {
//       document.body.className = "light"    
//     }
//   }


//   return (
//     <>
//       <ChangeColor/>
//       <h1>{theme?"Dark":"Light"}</h1>
//       <button onClick={toggletheme}>Change theme</button>
//     </>
//   )
// }

// export default App


// Task --> Make a bulb that can turn on and off

// import React, {useState} from 'react'
// import B_on from "./bulb_on.png"
// import B_off from "./bulb_off.png"

// const App = () => {

//   let [isBulbOn, setIsBulbOn] = useState(false)

//   let toggleImage = () => {
//     setIsBulbOn(!isBulbOn)
//   }

//   return (
//     <>
//       <img src={isBulbOn?B_on:B_off} height="100" width="100"  alt="" />
//       <button onClick={toggleImage}>{isBulbOn?"OFF":"ON"}</button>
//     </>
//   )
// }

// export default App


// Refs --> references that can access the property of an element

// import React from 'react'
// import {useRef} from 'react'

// const App = () => {
//   let inputRef = useRef()

//   let focusinput = () => {
//     inputRef.current.placeholder = "Enter you name dumbasssss"
//     inputRef.current.style.background = "red"
//     inputRef.current.style.padding = "20px"
//     inputRef.current.style.color = "blue"
//   }
//   return (
//     <>
//       <input type="text" ref={inputRef}/>
//       <button onClick={focusinput}>Click meeeeeeeee</button>
//     </>
//   )
// }

// export default App

// Uncontrolled ref - Forms

// import React,{useRef} from 'react'

// function App() {
//   let nameref = useRef()
//   let passref = useRef()

//   let handleSubmit = (event) => {
//     event.preventdefault()
//     let name = nameref.current.value 
//     let password = passref.current.value 
//   }

//   return (
//     <form onSubmit={handleSubmit}>

//       <div>
//         <input type="text" placeholder = 'Enter your name' ref = {nameref}/>
//       </div>
//       <div>
//         <input type="password" placeholder = 'Enter your password' ref = {passref}/>

//       </div>
//       <div>
//         <button>Submit</button>
//       </div>
//     </form>
//   )
// }

// export default App



// Controlled form
// import { useState } from "react"
// import React from 'react'

// const App = () => {

//   let [state,setState] = useState({
//     name:"",
//     email:"",
//     gender:"",
//     country:""
//   })

//   let { name,email,gender,country } = state

//   let [skill,setSkill] = useState([])

//   let handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(state)
//   }

// let handlename = (e) => {
//   console.log(e)
//   let username = e.target.value
//   setState({name:username})
// }

// let handleemail = (e) => {
//   console.log(e)
//   let useremail = e.target.value
//   setState({email:useremail})
// }

// Life Cycle Methods

// import React, { Component } from 'react'
// import Child from './Child.jsx';

// export default class App extends Component {

//   constructor(){
//     super();
//     this.state = {
//       name:"Atul"
//     }
//     console.log("Constructor is executing")
//   }

//   static getDerivedStateFromProps(props,state){
//     console.log("static getDerivedStateFromProps method is executing")
//     return null
//   }

//   componentDidMount(){
//     console.log("Component did mount method")
//   }

//   shouldComponentUpdate() { 
//     console.log("should componenet update method");
//     return true;
//   }

//   getSnapshotBeforeUpdate(){
//     console.log("snap shot method");
//   }

//   componentDidUpdate(){
//     console.log("component did update");
//   }

//   changename = () => {
//     this.setState({name:"keerthana"})
//   }

//   render() {
//     console.log("The render Method is executing")
//     return (
//       <>
//         <h1>
//           {this.state.name}
//         </h1>
//           {this.state.name==="Atul"?<Child/>:<></>}
//         <button onClick={this.changename}>Change</button>
//       </>
//     );
//   }
// }


// USEEFFECT
// USEEFFECT
// USEEFFECT
// USEEFFECT


// for unmount

// import React from 'react'

// function App() {

//   return (
//     <div>App</div>
//   )
// }

// export default App


//  for component did mount and compo did update

// import React,{useState,useEffect} from 'react'

// const App = () => {

//   let [count,setCount] = useState(0)

//   useEffect(()=>{
//     document.title=`you have clicked count ${count} times`
//     console.log("Title changing ----> equivalent to both did mount and did update(render) ")
//   })

//   let increment = () => {
//     setCount(count+1)
//   }

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={increment}>Plus (+)</button>
//     </>
//   )
// }

// export default App

// to pass dependencies through useEffect

// import React,{useState,useEffect} from 'react'

// const App = () => {
//   let [count,setCount] = useState(0)
//   let [name,setName] = useState('')

//   let increment = () => {
//     setCount(count+1)
//   }

//   useEffect(()=> {
//     document.title = `You clicked the title ${count} times`
//     console.log("this is also working")
//   },[count])

//   let handleChange = (e) => {
//     setName(e.target.value)
//   }

//   return (
//     <>
//       <h1>{count}</h1>
//       <input type="text" value={name} name='name' onChange={handleChange} />
//       <button onClick={increment}>plus (+)</button>
//     </>
//   )
// }

// export default App

// 

// Write the map function code

// 


// AXIOS
// AXIOS
// AXIOS

// import React from 'react'
// import axios from 'axios'
// import {useEffect,useState} from 'react'

// const App = () => {

//   let [user,setUser] = useState([])

//   let getApi = async () => {
//     let {data} = await axios.get('https://api.github.com/users')
//     console.log(data)
//     // console.log(Object.keys(data).length)
//     setUser(data)
//   }
//   // useEffect is used to write the side effect, that is fetching the data
//   // Component dependency is used to fetch data only once
//   useEffect(()=>{
//       try {
//         getApi()
//       }
//       catch(e) {
//         console.log(e);
//       }
//   },[])
// // if bracket not there, it will go to infinite loop
//   return (
//     <>
// <section style={{ border: '2px solid #000', padding:'10px'}}>
//         {user.map((x) => {
//           console.log(x);
//           return (
//             <div style={{ border: '2px solid #FF0000', padding:'5px',margin:'10px',textAlign:'center'}}>
//               <img src={x.avatar_url} alt="" height="100px" width="150px"/>
//               <h1>id:{x.id}</h1>
//               <h1>Name : {x.login}</h1>
//             </div>
//           );
//       })}
//       </section>
//     </>
//   )
// }

// export default App


// ERROR BOUNDARIES
// ERROR BOUNDARIES
// ERROR BOUNDARIES
// ERROR BOUNDARIES

// import React from 'react'
// import Child from './Child'
// import ErrorBoundary from './ErrorBoundary'

// const App = () => {
//   return (
//     <>
//       <ErrorBoundary>
//         <Child money={20000}/>
//       </ErrorBoundary>
//       <ErrorBoundary>
//         <Child money={40000}/>
//       </ErrorBoundary>
//       <ErrorBoundary>
//         <Child money={80000}/>
//       </ErrorBoundary>
//     </>
//   )
// }

// export default App


// import React,{ useState } from 'react'
// import Child from './child.jsx'
// import Portal from './Portal.jsx'

// const App = () => {

//   let [open, setOpen] = useState(false)

//   let signup = () => {
//     setOpen(!open)
//   }

//   return (
//     <>
//       <button onClick={signup}>Sign Up</button>
//       {open?<Portal/>:<></>}
//     </>
//   )
// }

// export default App


// Pure components
// Pure components
// Pure components
// Pure components

// import React from 'react'
// // import Child from './Child'
// import Parent from './purecompo/Parent'

// const App = () => {
//   return (
//     <>
//       <Parent/>
//     </>
//   )
// }

// export default App


// Use Call Back
// Use Call Back
// Use Call Back
// Use Call Back

// import React from 'react'
// import Main from './usecallback/Main'

// const App = () => {
//   return (
//     <>
//       <Main/>
//     </>
//   )
// }

// export default App

// TASKS - COLOR PICKER
// TASKS - COLOR PICKER
// TASKS - COLOR PICKER
// TASKS - COLOR PICKER
// TASKS - COLOR PICKER

// import React from 'react'
// import { useState } from 'react'


// const App = () => {

//   let [color,setColor] = useState("000FFF")

//   let handlecolor = (e) => {
//     setColor(e.target.value)
//   }

//   return (
//     <>
//       <h1>Color Picker</h1>
//       <input type="color" value={color} onChange={handlecolor}/>
//     </>
//   )
// }

// export default App

// Task ----> to get the current Time without refreshing the page
// Task ----> to get the current Time without refreshing the page
// Task ----> to get the current Time without refreshing the page
// Task ----> to get the current Time without refreshing the page
// Task ----> to get the current Time without refreshing the page

// import React,{useState} from 'react'


// const App = () => {

//   let time = new Date().toLocaleTimeString()
//   let [currentTime,setCurrentTime] = useState(time)

//   let getCurrentTime = () => {
//     let time2 = new Date().toLocaleTimeString()
//     setCurrentTime(time2);
//   }

//   return (
//     <>
//     <h1>
//       {currentTime}
//     </h1>
//     <button onClick={getCurrentTime}>Current Time</button>

//     </>
//   )
// }

// export default App


// Task --> Digital Clock
// Task --> Digital Clock
// Task --> Digital Clock
// Task --> Digital Clock

// import React,{useState} from 'react'

// const App = () => {
//   let time = new Date().toLocaleTimeString()

//   let [currentTime, setCurrentTime] = useState(time);

//   let getCurrentTime = () => {
//     let time1 = new Date().toLocaleTimeString()
//     setCurrentTime(time1)
//   }

//   setInterval(getCurrentTime,1000)

//   return (
//     <>
//       {currentTime}
//     </>
//   )
// }

// export default App


// Task ---> Greeting app
// Task ---> Greeting app
// Task ---> Greeting app
// Task ---> Greeting app

// import React,{useState} from 'react'

// const App = () => {
//   let [name, setName] = useState("")
//   let [message, setMessage] = useState("")

//   let handlechange = (e) => {
//     name = e.target.value
//     setName(name)
//   }

//   let greeting = () => {
//     setMessage(`Hello ${name}`)
//     setName('')
//   }

//   return (
//     <>
//       <h1>greeting app</h1>
//       <input type="text" placeholder='Enter name' value={name} onChange={handlechange} />
//       <button onClick={greeting}>Greet</button>
//       <p>{message}</p>
//     </>
//   )
// }

// export default App


// Task --> To do app
// Task --> To do app
// Task --> To do app
// Task --> To do app
// Task --> To do app

// import React from 'react'
// import Todo from './Todo'

// const App = () => {
//   return (
//     <>
//       <Todo />
//     </>
//   )
// }

// export default App


// ROUTING
// ROUTING
// ROUTING
// ROUTING

// import React from 'react'
// import { BrowserRouter,Route,Routes } from 'react-router-dom'
// import About from './routing/About'
// import Home from './routing/Home'
// import Contact from './routing/Contact'
// import Errorpage from './routing/Errorpage'
// import Layout from './routing/Layout'

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Layout/>} >
//           <Route index element={<Home/>} />
//           <Route path='/about' element={<About/>} />
//           <Route path='/contact' element={<Contact/>}/>
//           <Route path='*' element={<Errorpage/>} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App



// V6 --> Routing Method (object way routing)
// V6 --> Routing Method (object way routing)
// V6 --> Routing Method (object way routing)
// V6 --> Routing Method (object way routing)
// V6 --> Routing Method (object way routing)

// import React from 'react';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Layout from './routing/Layout';
// import Home from './routing/Home';
// import Contact from './routing/Contact';
// import About from './routing/About';
// import Errorpage from './routing/Errorpage';

// let r = createBrowserRouter([{
//   path: "/",
//   element: <Layout />,
//   children: [{
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "/contact",
//     element: <Contact />
//   },
//   {
//     path: "/about",
//     element: <About />
//   },
//   {
//     path: "*",
//     element: <Errorpage />
//   }
//   ]
// }])

// const App = () => {
//   return <RouterProvider router={r}></RouterProvider>
// }

// export default App


// Axios --> https://fakestoreapi.com/products
// Axios --> https://fakestoreapi.com/products
// Axios --> https://fakestoreapi.com/products
// Axios --> https://fakestoreapi.com/products
// Axios --> https://fakestoreapi.com/products

import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

const App = () => {
  
  let [product,setProduct] = useState();

  let getApi = async () => {
    let {data} = await axios.get("https://fakestoreapi.com/products")
    console.log(data)
    setProduct(data);
  }

  useEffect(()=>{
    try {
      getApi();  
    } catch (e) {
      console.log(e)
    }
  },[])
  
  return (
    <>
      App
      <section>
        {product.map((x,y)=>{
          console.log(x)
          return (
            <div key={y}>
              <h4>Title : {x.title}</h4>
              <img src={x.image} alt="" height="100px" width="150px" />
              <p>{x.rating.rate}</p>
              <p>{x.rating.count}</p>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default App
