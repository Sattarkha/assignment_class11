"use client"
import { useState } from "react"

const State = () => {
    const [index, setIndex] = useState(1) // Start from page 1
    const [pages, setPages] = useState(10) // Start with 10 pages

    const handleIncrement = () => {
        if (index < 10) {
            setIndex(index + 1)
            setPages(pages + 10)
        }
    }

    const handleDecrement = () => {
        if (index > 1) {
            setIndex(index - 1)
            setPages(pages - 10)
        }
    }

    return (
        <div className="flex flex-col justify-center">
            <h1 className="text-7xl font-bold mb-5">
             Index: {index === 1 ? "Start" : index === 10 ? "The End" : ` ${index}`}
            </h1>
            <h2 className="text-center text-4xl mb-10">Pages: {pages}</h2>
            <div className="flex justify-center">
                <button
                    className="py-2 px-10 bg-blue-700 text-white rounded-md hover:bg-blue-800"
                    onClick={handleIncrement}
                >
                    Increment
                </button>
                <button
                    className="py-2 px-10 bg-red-700 text-white rounded-md ml-5 hover:bg-red-800"
                    onClick={handleDecrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default State
