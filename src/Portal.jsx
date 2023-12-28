import React from 'react'
import ReactDOM from 'react-dom'

const Portal = () => {
  
    let Modal = () => {
        return (

            <div className="main-container">
                <div className="container">
                    <h2>Sign Up</h2>
                    <div>
                        <label htmlFor="uname">Username</label>
                        <input type="text" placeholder='Username' name="uname"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Password' name='password'/>
                    </div>
                </div>
            </div>
        )
    }

    return (
        ReactDOM.createPortal(<Modal/>,document.getElementById("portal"))
  )
}

export default Portal
