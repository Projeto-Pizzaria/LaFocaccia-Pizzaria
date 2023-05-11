"use client"

import { PizzaContext } from "@/providers/PizzaContext"
import { useContext } from "react"

export const ModalPedidos=()=>{
    const{setOpenModal,currentPizza}=useContext(PizzaContext)

    return(

        <div role="dialog">
<button onClick={()=>setOpenModal(false)}>Fechar Modal</button>
            
        <h1>{currentPizza.name}</h1>
        </div>
    )
}