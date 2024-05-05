import React from 'react'

export const ImageList = (lists) => {
    if (lists === "spinner") {
        return new Error("Image not found")
    }
    return (
        <div>
            {
                lists
            }
        </div>
    )
}