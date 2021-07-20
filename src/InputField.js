import React,{useState} from 'react'


const InputField = ({add}) => {

    const [text,setText] = useState('')

    const check = (event)=>{
        setText(event.target.value);
    }
    return (
        <div>
            <div className="heading">
            
            <h1 >To-Do App</h1>
            </div>
         
            <input className="input" type="text" onChange={check} value={text}/>
            <button className="add btn" onClick={()=>add(text)}>Add</button>
        </div>
    )
}

export default InputField



