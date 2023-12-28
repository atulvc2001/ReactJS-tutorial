import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  
  
    constructor(){
        super()
        this.state = {
            hasError:false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError:true
        }
    }

    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
    }

    render() {
        if(this.state.hasError === true){
            return <h1>Don't Worry, there is an error in the server</h1>
        } else {
            return this.props.children
        }
  }
}
