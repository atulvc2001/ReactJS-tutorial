// useCallBack() -----> HOOK
// It will memoize the entire function

import React, { useCallback, useState } from 'react'
import Counter from './Counter'
import Button from './Button'


const Main = () => {
  
    let [age,setAge] = useState(24)
    let [sal,setSal] = useState(25000)

    let incrementage = useCallback(() => {
        setAge(age+1)
    },[age])

    let incrementsal = useCallback(() => {
        setSal(sal+2000)
    },[sal])

    return (
    <>
        <Counter send={age}>Age Counter</Counter>
        <Counter send={sal}>Salary Counter</Counter>
        <Button fun={incrementage}>Change Age</Button>
        <Button fun={incrementsal}>Change sALARY</Button>
    </>
  )
}

export default Main
