import React from 'react'

function useSortFilter(items, searchTerm, sortKey) {
    let result = items
    if(searchTerm){

        result = result.filter((item)=> item.name.toLowerCase().includes(searchTerm.toLowerCase())   || item.description.toLowerCase().includes(searchTerm.toLowerCase()))

    }

    if(sortKey){

        result.sort((a,b)=>sortKey=='description'? a.description.localeCompare(b.description) : a.name.localeCompare(b.name))

    }

    return result


}

export default useSortFilter    