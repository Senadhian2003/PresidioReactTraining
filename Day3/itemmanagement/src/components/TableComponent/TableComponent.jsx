import React, { useEffect, useRef, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useContext } from 'react';
import { ItemContext } from '../ItemContext';
import useSortFilter from '../CustomHooks/useSortFilter';


function TableComponent() {

    const {state, dispatch} = useContext(ItemContext);
    const [searchTerm, setSearchTerm] = useState('')
    const [sortKey, setSortKey] = useState('');

    const searchInputRef = useRef(null);

    useEffect(()=>{

      searchInputRef.current.focus()

    },[])

    const filteredItems = useSortFilter(state, searchTerm, sortKey)

    const deleteItem = (id)=>{
        console.log("Deleting item")
        dispatch({type: 'REmOVE_ITEM', payload : id})

    }

    console.log(state)

  return (
    <div>

      <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}  ref={searchInputRef} />

      <select onChange={(e) => setSortKey(e.target.value)}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="description">Description</option>
        </select>

         <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.no</th>
          <th> Name</th>
          <th> Description</th>
          <th> Action</th>
        </tr>
      </thead>
      <tbody>
       
       {
        filteredItems.map((item, index)=>{
            return <tr>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td><button onClick={()=>{
                    deleteItem(item.id)
                }} >Delete</button></td>
            </tr>
        })
       }
       
      </tbody>
    </Table>
    </div>
  )
}

export default TableComponent