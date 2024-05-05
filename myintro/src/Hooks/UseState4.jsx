import React from 'react'
import { useState } from 'react'

export const UseState4 = () => {
    let [items, setItems] = useState([])
    let addItems = () => {
        setItems([
            ...items, {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ])
    }
    console.log(items);
    return (

        <div>
            <button onClick={addItems}>Add Item</button>
            {
                <ul>
                    {
                        items.map((item) => {

                          return <li key={item.id}>{item.value}</li>

                        })
                    }
                </ul>
            }
        </div>
    )
}
