import React, { useReducer } from 'react'

let initialState={
    firstcounter:0
}

let reducer=(state,action)=>{
    switch(action.type){
        case "increment1":
            return {firstcounter : state.firstcounter+action.value};
        case "decrement1":
            return {firstcounter : state.firstcounter-action.value};
        case "reset":
            return initialState;
        default:
            return state;
    }
}
export const UseReduce5 = () => {
    let [count1, dispatch1] = useReducer(reducer, initialState)
    let [count2, dispatch2] = useReducer(reducer, initialState)
  return (
    <div>
        <h3>count1 : {count1}</h3>
        <button className="btn btn-warning" onClick={()=>{dispatch1("increment")}}>Incr.</button>
        <button className="btn btn-warning" onClick={()=>{dispatch1("decrement")}}>Decr.</button>
        <button className="btn btn-warning" onClick={()=>{dispatch1("reset")}}>Reset</button>

        <h3>count2 : {count2}</h3>
        <button className="btn btn-warning" onClick={()=>{dispatch2("increment")}}>Incr.</button>
        <button className="btn btn-warning" onClick={()=>{dispatch2("decrement")}}>Decr.</button>
        <button className="btn btn-warning" onClick={()=>{dispatch2("reset")}}>Reset</button>
    </div>
  )
}
