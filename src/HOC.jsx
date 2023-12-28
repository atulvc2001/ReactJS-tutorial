// higher order component

import React from 'react'


const HOC = (Wrapper) => {

    return () => {
        return <Wrapper name="Hema"/>
    }
}

export default HOC