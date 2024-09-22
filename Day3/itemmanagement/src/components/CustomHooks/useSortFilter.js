import React from 'react'

function useSortFilter(items, searchTerm, sortKey) {
    let result = items
    if(searchTerm && searchTerm!=''){

        result = result.filter((item)=> item.name.toLowerCase().includes(searchTerm.toLowerCase())   || item.description.toLowerCase().includes(searchTerm.toLowerCase()))

    }

    if(sortKey){

        result.sort((a,b)=>sortKey=='description'? a.description.localeCompare(b.description) : a.name.localeCompare(b.name))

        if(sortKey=='name'){
            result.sort((a,b)=> a.name.localeCompare(b.name))
        }
        else if(sortKey=='description'){
            result.sort((a,b)=> a.description.localeCompare(b.description))

        }

        return result

    }

    return result


}

export default useSortFilter    