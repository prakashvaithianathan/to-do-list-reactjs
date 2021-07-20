import React,{useEffect, useState} from 'react'
import InputField from './InputField'
import ToDoItem from './ToDoItem'

const App = () => {
   

const [value,setValue]=useState([])

useEffect(()=>{
    const items = localStorage.getItem("items")
    setValue(JSON.parse(items))
},[])

const add = (text)=>{
    setValue((current)=>{
    
    localStorage.setItem('items',JSON.stringify([...current,text]))
     return [...current,text];
    });
}

const deleteItem = (id)=>{
    setValue((current)=>{
        let temp =  current.filter((item,index)=>{
            return index!==id;
        })
        localStorage.setItem('items',JSON.stringify(temp))
        return temp
    })
    
}


    return (
        <div className='container'>
            <InputField add={add} />
            <div>
                <ul>
                    {value.map((data,index)=>{
                        return <ToDoItem key={index} index={index} data={data} onClick={()=>deleteItem(index)}/>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default App

