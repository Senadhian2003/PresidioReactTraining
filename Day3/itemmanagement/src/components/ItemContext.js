import React, {useContext, useReducer, createContext} from "react";


export const ItemContext = createContext()


function itemReducer(state, action){

    switch(action.type){
    case 'ADD_NEW_ITEM':
        return [...state, action.payload]
    case 'REmOVE_ITEM':
        return state.filter((item)=>item.id!=action.payload)
}

}

export function ItemProvider({children}){

    const [state, dispatch] = useReducer(itemReducer, [])

    return <ItemContext.Provider value={{state, dispatch}}>
        {children}
    </ItemContext.Provider>

}