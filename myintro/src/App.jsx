import React from "react";
import { Cont1 } from "./ContextAPI/Cont1";
import { UseCont1 } from "./ContextAPI/UseCont1";
import { Login } from "./Hooks/Login";
import Login2 from "./Hooks/Login2";
// import { UseEffData1 } from "./Hooks/UseEffData1";
import { UseEffData2 } from "./Hooks/UseEffData2";
import { UseEffData3 } from "./Hooks/UseEffData3";
import { UseEffData4 } from "./Hooks/UseEffData4";
// import UseEffect from "./Hooks/UseEffect";
// import { UseEffect1 } from "./Hooks/UseEffect1";
// import UseEffect3 from "./Hooks/UseEffect3";
// import { UseEffect4 } from "./Hooks/UseEffect4";
// import UseEffect5 from "./Hooks/UseEffect5";
// import { UseEffect6 } from "./Hooks/UseEffect6";
import { UseEffect7 } from "./Hooks/UseEffect7";
import { UseReduce4 } from "./Reducer/UseReduce4";
import { UseReduce6 } from "./Reducer/UseReduce6";
import { UseReduce7 } from "./Reducer/UseReduce7";
import { Product } from "./Restaurant/Component/Product";
import { Parent } from "./Router/Parent";
import { Parent2 } from "./Router/Parent2";
import { Parent4 } from "./Router/Parent4";
import { Parent5 } from "./Router/Parent5";
// import CompLifeA from "./CompLifeCycle/CompLifeA";
// import CompLifeB from "./CompLifeCycle/CompLifeB";
// import CompLifeC from "./CompLifeCycle/CompLifeC";
// import CompLifeE from "./CompLifeCycle/CompLifeE";
// import CompLifeF from "./CompLifeCycle/CompLifeF";
// import { ParentHero } from "./CompLifeCycle/ParentHero";
// import { UseState } from "./Hooks/UseState";
// import { UseState1 } from "./Hooks/UseState1";
// import { UseState2 } from "./Hooks/UseState2";
// import { UseState3 } from "./Hooks/UseState3";
// import { UseState4 } from "./Hooks/UseState4";
// import { ParentComp } from "./task5/ParentComp";
// import PostData from "./Component/PostData";
// import PostData1 from "./Component/PostData1";
// import GetData1 from "./Component/GetData1";
// // import Memo1 from "./Memo/Memo1";
// import ParentMemo from "./Memo/ParentMemo";
// import GitData from "./Project/GitData";
// import Task from "./task3/Task";
// import PostData2 from "./task4/PostData2";
// import PostData3 from "./task4/postData3";
// import ToDoList from "./task4/ToDoList";
// import Task4 from "./task4/ToDoList";
// import { ProfileData } from "./Project/ProfileData";
// import ParentComp from "./PureComp/ParentComp";
// import ParentRef from "./Refs/ParentRef";
// import Ref5 from "./Refs/Ref5";
// import ClassCompo from "./ClassComp1";
// import Props1 from "./Props/Props1";
// import Props2 from "./Props/Props2";
// import Footer from "./Styling/Footer";
// import NavBar from "./Styling/NavBar";
// import Section from "./Styling/Section";
// import Parent from "./Props/Parent";
// import PropsDes1 from "./Props/PropsDes1";
// import Props3 from "./Props/Props3";
// import { Props5 } from "./Props/Props5";
// import { Props7 } from "./Props/Props7";
// import { DefProps1 } from "./Props/DefProps1";
// import State1 from "./States/State1";
// import State2 from "./States/State2";
// import State3 from "./States/State3";
// import State4 from "./States/State4";
// import { FunctionalClick } from "./Event/FunctionalClick";
// import ClassClick from "./Event/ClassClick";
// // import ClickBind from "./Event/ClickBind";
// // import ClickBind from "./Event/ClickBind2";
// // import ClickBind from "./Event/ClickBind3";
// import ClickBind from "./Event/ClickBind4";
// import { App1 } from "./task/App1";
// import ParentClass1 from "./Props/ParentClass1";
// import Condi1 from "./ConditionalRend/Condi1";
// import Condi2 from "./ConditionalRend/Condi2";
// import Condi3 from "./ConditionalRend/Condi3";
// import App2 from "./Project1/App2";
// import { NameList } from "./List Rendering/NameList";
// import { PersonList } from "./List Rendering/PersonList";
// import { ListItems } from "./List Rendering/ListItems";
// import { ParentComp } from "./List Rendering/ParentComp";
// import { Wrapped } from "./List Rendering/Wrapped";
// import Empl, { Employee } from "./task1/Empl";
// import { KeyRend } from "./List Rendering/KeyRend";
// import { External } from "./style css/External";
// import { External1 } from "./style css/External1";
// import { Inline } from "./style css/Inline";
// import { Inline1 } from "./style css/Inline1";
// import { Module } from "./style css/Module";
// import { Frag1 } from "./Fragments/Frags1";
// import Home from "./Home";
// import RegForm from "./Project2/RegForm";
// import HOC1 from "./HOC/HOC1";
// import HOC2 from "./HOC/HOC2";
// import UpdateComponent from "./HOC/HigherOrdComp";
// import { OnClick } from "./HOC/OnClick";
// import Ref1 from "./Refs/Ref1";
// 

// import Ref from "./task2/Ref";
// import "./App.css";


const App = (Data) => {
    return (
        <React.StrictMode>
            {/* <Props1 />
            <Props2 name="MAHESH DALLE" />
            <Parent/> */}
            {/* <PropsDes1/> */}
            {/* <Props3/> */}
            {/* <Props5/> */}
            {/* <Props7/> */}
            {/* <DefProps1 /> */}
            {/* <State1/> */}
            {/* <State2/> */}
            {/* <State3 user= "Ganu"/> */}
            {/* <State4/> */}
            {/* <FunctionalClick/> */}
            {/* <ClassClick/> */}
            {/* <ClickBind/> */}
            {/* <App1/> */}
            {/* <ParentClass1/> */}
            {/* <Condi1/> */}
            {/* <Condi2/> */}
            {/* <Condi3/> */}
            {/* <App2/> */}
            {/* <NameList/> */}
            {/* <PersonList/> */}
            {/* <ListItems/> */}
            {/* <ParentComp/> */}
            {/* <Wrapped/> */}
            {/* <KeyRend/> */}
            {/* <Empl/> */}
            {/* <External/> */}
            {/* <External1 primary={false}/> */}
            {/* <Inline/> */}
            {/* <Inline1/> */}
            {/* <Module/> */}
            {/* <Frag1/> */}
            {/* <Home/> */}
            {/* <RegForm/> */}
            {/* <HOC1/> */}
            {/* <HOC2/> */}
            {/* <OnClick/> */}
            {/* <Ref1/> */}
            {/* <Ref2/> */}
            {/* <Ref3/> */}
            {/* <Ref4/> */}
            {/* <Ref/> */}
            {/* <ParentRef/> */}
            {/* <Ref5/> */}
            {/* <ParentComp/> */}
            {/* <ParentMemo/> */}
            {/* <GetData1/> */}
            {/* <GitData/> */}
            {/* <ProfileData/> */}
            {/* <PostData/> */}
            {/* <Task Data={Data}/> */}
            {/* <PostData1/> */}
            {/* <PostData2/> */}
            {/* <PostData3/> */}
            {/* <Task4/> */}
            {/* <ToDoList/> */}
            {/* <CompLifeA/> */}
            {/* <CompLifeB/> */}
            {/* <CompLifeC/> */}
            {/* <CompLifeE/> */}
            {/* <CompLifeF/> */}
            {/* <ParentHero/> */}
            {/* <ParentComp/> */}
            {/* <UseState/> */}
            {/* <UseState1/> */}
            {/* <UseState2/> */}
            {/* <UseState3/> */}
            {/* <UseState4/> */}
            {/* <UseEffect/> */}
            {/* <UseEffect3/> */}
            {/* <UseEffect1/> */}
            {/* <UseEffect4/> */}
            {/* <UseEffect5/> */}
            {/* <UseEffect6/> */}
            {/* <UseEffect7/> */}
            {/* <UseEffData1/> */}
            {/* <UseEffData2/> */}
            {/* <UseEffData3/> */}
            {/* <UseEffData4/> */}
            {/* <Login/> */}
            {/* <Login2/> */}
            {/* <UseCont1/> */}
            {/* <Cont1/> */}
            {/* <UseCont1/> */}
            {/* <Product/> */}
            {/* <UseReduce4/> */}
            {/* <UseReduce6/> */}
            {/* <UseReduce7/> */}
            {/* <Parent/> */}
            {/* <Parent2/> */}
            {/* <Parent4/> */}
            <Parent5/>
        </React.StrictMode>

    )
}
export default App