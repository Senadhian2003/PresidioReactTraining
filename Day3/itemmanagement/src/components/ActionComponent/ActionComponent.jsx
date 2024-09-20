import React, { useState } from 'react'
import { useContext } from 'react'
import "./ActionComponent.css"
import { ItemContext } from '../ItemContext'
function ActionComponent() {

    const {state, dispatch} = useContext(ItemContext)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const addNewIem = ()=>{
        console.log("Adding new Item")
        dispatch({type:'ADD_NEW_ITEM', payload : { id: Date.now(), name, description }})
        setName('')
        setDescription('')
    }

  return (


    <div className='ActionComponent'>
        
        <label htmlFor=""> Name : </label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

        <label htmlFor=""> Description :</label>
        <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />

        <br />  

        <button onClick={addNewIem} >Add Item</button>

    </div>
  )
}

export default ActionComponent