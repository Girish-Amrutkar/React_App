import React, { useReducer } from 'react'

let initialState={
    firstCounter:0,
    secondCounter:0
}

let reducer=(state,action)=>{
    switch(action.type){
        case "increment1":
            return {...state,firstCounter : state.firstCounter+action.value};
        case "decrement1":
            return {...state,firstCounter : state.firstCounter-action.value};
        case "reset1":
            return initialState;
        
        case "increment2":
            return {...state,secondCounter : state.secondCounter+action.value};
        case "decrement2":
            return {...state,secondCounter : state.secondCounter-action.value};
        case "reset2":
            return initialState;

        default:
            return state;
    }
}
export const UseReduce4 = () => {
    let [count1, dispatch1] = useReducer(reducer, initialState)
    let [count2, dispatch2] = useReducer(reducer, initialState)
  return (
    <div>
        <h3>count1 : {count1.firstCounter}</h3>
        <button className="btn btn-warning" onClick={()=>{dispatch1("increment1")}}>Incr.</button>
        <button className="btn btn-warning" onClick={()=>{dispatch1("decrement1")}}>Decr.</button>
        <button className="btn btn-warning" onClick={()=>{dispatch1("reset1")}}>Reset</button>

        <h3>count2 : {count2.secondCounter}</h3>
        <button className="btn btn-warning" onClick={()=>{dispatch2("increment2")}}>Incr.</button>
        <button className="btn btn-warning" onClick={()=>{dispatch2("decrement2")}}>Decr.</button>
        <button className="btn btn-warning" onClick={()=>{dispatch2("reset2")}}>Reset</button>
    </div>
  )
}
