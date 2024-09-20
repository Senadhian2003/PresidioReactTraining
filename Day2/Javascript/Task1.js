

const fetchData = async()=>{

    const response = await fetch('https://65abad15fcd1c9dcffc6d0f3.mockapi.io/api/getUsers/user')
    const ParsedData = await response.json();

    // console.log(data)
    
    return ParsedData

}

function ifPresent(data){

    const obj = data.find((d)=> d.id==8)

    if(obj){
        return obj
    }
    throw new Error("Value not found")
}




const data = await fetchData()



try{
    console.log(ifPresent(data))
}
catch(error){
    console.log(error)
}


