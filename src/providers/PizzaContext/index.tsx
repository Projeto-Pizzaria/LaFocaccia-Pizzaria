"use client"



import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"
interface IPizzaProvider{
    children:ReactNode
}
interface IPizzaContext{
    openModal: boolean
    setOpenModal: Dispatch<SetStateAction<boolean>>
    currentPizza: null
    setCurrentPizza: Dispatch<SetStateAction<null>>
}
export const PizzaContext= createContext({}as IPizzaContext)


export const PizzaProvider=({children}:IPizzaProvider)=>{
    const[openModal,setOpenModal]= useState(false)
    const[currentPizza,setCurrentPizza]=useState(null)


    return(

    <PizzaContext.Provider value={{openModal,setOpenModal,currentPizza,setCurrentPizza}}>
        {children}
    </PizzaContext.Provider>
    )

}