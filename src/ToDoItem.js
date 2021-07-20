import React from 'react'

const ToDoItem = ({data,index, onClick}) => {


    
    return (
        <>

        <h4 onClick={onClick} key={index+1} >{data}</h4>
        </>
        

            )
}

export default ToDoItem


