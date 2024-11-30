import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    let bookName="English"
    let chapter=10
    let pages=100
  return (
    <div>
        <ChildComponent bookName={bookName}chapter={chapter}pages={pages}/>
    </div>
  )
}

export default ParentComponent