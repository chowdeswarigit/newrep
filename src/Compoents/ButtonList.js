import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const list =["All","Games","Music","Spotrs","Soccer","Cricket","Cooking","Valentains","Mixes","Telugu Cinema"]
  return (

    <div className='flex'>
       {list.map(item =><Button name ={item}></Button>)}
    </div>

    )
}

export default ButtonList