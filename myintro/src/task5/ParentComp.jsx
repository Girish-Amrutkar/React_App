import React from 'react'
import ErrorBoundries from './ErrorBoundries'
import { ImageList } from './ImageList';

export const ParentComp = () => {
    let list = ["https://tse1.mm.bing.net/th?id=OIP.Us3vornr4pB02KFIC55WZwHaFF&pid=Api&P=0&h",
        "https://tse1.mm.bing.net/th?id=OIP.CvMAeJSHI_WeUIJD8x32QAHaEZ&pid=Api&P=0&h=180",
        "https://tse1.mm.bing.net/th?id=OIP.YAXlTjvtEKchdMVc5laZhwHaE8&pid=Api&P=0&h=180",
        "https://tse2.mm.bing.net/th?id=OIP.xung4mlBfvUR3RKzjnRY2AHaEK&pid=Api&P=0&h=180",
        "https://tse1.mm.bing.net/th?id=OIP.wwxK07x0Umfnh0l-nrjxjgHaDg&pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QAAAA&pid=Api&P=0&h=180",
        "spinner"];
    return (
        <div>
            <ErrorBoundries>
                <ImageList lists={list} />
            </ErrorBoundries>
        </div>
    )
}