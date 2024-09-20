import React from 'react'
import Table from 'react-bootstrap/Table';
import { useContext } from 'react';
import { ItemContext } from '../ItemContext';


function TableComponent() {

    const {state, dispatch} = useContext(ItemContext);

    const deleteItem = (id)=>{
        console.log("Deleting item")
        dispatch({type: 'REmOVE_ITEM', payload : id})

    }

  return (
    <div>
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
        state.map((item, index)=>{
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