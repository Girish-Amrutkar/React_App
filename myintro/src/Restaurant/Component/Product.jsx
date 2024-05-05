import React from 'react';
import { useState } from 'react';
import Menu from './menu';
import './style.css'

export const Product = () => {
    const [items, setItems] = useState(Menu);
    const filterItem = (catItem) => {
        const updateItems = Menu.filter((currEle) => {
            return currEle.category === catItem
        })
        setItems(updateItems)
    }
    const filterType = (typeItem) =>{
        const updateType = Menu.filter((currTyp)=>{
            return currTyp.type == typeItem
        })
        setItems(updateType)
    }
    return (
        <div>
            <div className="my-5">
                <h1 className="text-center">Order Your Favorite Food</h1>
            </div>
            <div className="container d-flex justify-content-around">
                <button className="btn btn-warning" onClick={() => { filterItem("Breakfast") }}>Breakfast</button>
                <button className="btn btn-warning" onClick={() => { filterItem("Lunch") }}>Lunch</button>
                <button className="btn btn-warning" onClick={() => { filterItem("Evening") }}>Evening</button>
                <button className="btn btn-warning" onClick={() => { filterItem("Timepass") }}>Timepass</button>
                <button className="btn btn-warning" onClick={() => { filterItem("Dinner") }}>Dinner</button>
                <button className="btn btn-warning" onClick={() => { filterType("Veg") }}>Veg</button>
                <button className="btn btn-warning" onClick={() => { filterType("Non-veg") }}>Non Veg</button>
                <button className="btn btn-warning" onClick={() => setItems(Menu)}>All</button>
            </div>
            <div className="container-fluid">
                <div className="row">
                    {
                        items.map(({ id, name, image, price, description, category, type }) => (
                            <div className="item-card col-8 my-5 d-flex mx-auto border border-2 rounded rounded-4" id='card' key={id}>
                                <div className="col-4 my-5">
                                    <img srcod src={image} alt={name} className="rounded rounded-3 m-5" style={{ height: "200px", width: "300px" }} />
                                </div>
                                <div className="col-8">
                                    <ul className="list-group text-start m-5" id='list' data-bs-theme="dark">
                                        <li className="list-group-item list-group-item-action"><h3>Name: {name}</h3></li>
                                        <li className="list-group-item list-group-item-action">Category: {category}</li>
                                        <li className="list-group-item list-group-item-action text-danger">Price: {price}</li>
                                        <li className="list-group-item list-group-item-action">Description: {description}</li>
                                        <li className="list-group-item list-group-item-action">Type: {type}</li>
                                        <li className="list-group-item list-group-item-action">Product ID: {id}</li>
                                    </ul>
                                    {/* <button className='btn btn-primary m-4'>Order</button> */}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};