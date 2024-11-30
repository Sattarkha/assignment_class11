import React from 'react'

interface Ibook {
    bookName:string,
    chapter:number,
    pages:number,

}

const ChildComponent = (props:Ibook) => {
    console.log(props)
  return (
    <div>
        <h1 className='text-2xl font-bold'>BOOK:{props.bookName}</h1>
        <h1 className='text-2xl font-bold'>INDEX:{props.chapter}</h1>
        <h1 className='text-2xl font-bold'>PAGE:{props.pages}</h1>
    </div>
  )
}

export default ChildComponent