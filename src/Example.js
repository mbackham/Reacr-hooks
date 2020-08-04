import React, { Component, useState, useEffect ,createContext,useContext} from 'react';
const CountContext=createContext()
function ChildExample(){
    let count = useContext(CountContext)
    return(<h2>{count}</h2>)
}
function Example() {
    const [ count , setCount ]=useState(0)
    return (
        <div>
            <p>you clicked {count}times</p>
            <button onClick={() => { setCount(count + 1) }}>点击 click</button>
            <CountContext.Provider value={count}>
                <ChildExample></ChildExample>
            </CountContext.Provider>
        </div>
    )
}
export default Example