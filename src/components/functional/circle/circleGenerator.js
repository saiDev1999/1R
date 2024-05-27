import React, { useState } from 'react'

function CircleGenerator() {

    const[circles,setCircles]=useState([])
    const addCircle=()=>{
        setCircles([...circles,false])
    }

    const handleClick=(index)=>{
        console.log(index)
        //I have index , I have array 
        // based on the index i need alter the value of array

    }
  return (
    <div>
                <button onClick={addCircle} >Click to add circles</button>

        {
            circles.map((eachCircle,index)=>{

                return <Circle colored={eachCircle} handleClick={handleClick} index={index} />

            })
        }
        
    </div>
  )
}

export default CircleGenerator

function Circle({colored,handleClick,index}) {
    return (
      <div style={{width:100,height:100,borderRadius:"50%",border:"5px solid black",backgroundColor:colored?"black":"white"}} onClick={()=>handleClick(index)} ></div>
    )
  }
  



