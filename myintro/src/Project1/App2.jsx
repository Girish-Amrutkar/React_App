import React from "react";
import "./App.css";
import { Cards1 } from "./Cards1";
import Data from "./Data.json";
// import Cards from "./Cards";
 

const App2 =()=>{
    console.log(Data)

    return(
        <>
        <Cards1 Data ={Data}/>
        </>
    )
}
export default App2;