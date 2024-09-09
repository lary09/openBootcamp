import React from "react"


const Content =({parts})=>{
    return(
        <ul>
            {parts.map(parts =>(
                <li key={parts.id}>{parts.name} {parts.exercises}</li>
            ))}
            
        </ul>
    )
}
export default Content