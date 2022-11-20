import React from 'react'
import './Section.css'

const Section = ({Icon,title,color,selected}) => {
  return (
    <div className={`section ${selected && "section-selected"}`} 
    style={{
        borderBottom:`3px solid ${color}`,
        color:`${selected && color }`,
    }} >
<Icon />
<h6>{title}</h6>

    </div>
  )
}

export default Section