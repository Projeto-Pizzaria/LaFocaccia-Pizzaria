"use client"

import { useContext } from "react";
import { PizzaCard } from "../PizzaCard"
import { PizzaContext } from "@/providers/PizzaContext";
import { ModalPedidos } from "../ModalPedidos";

export interface IPizza{
    pizzas:[{

        id:number,
        name:string,
        ingredients: string;
        priceG: number;
        priceM: number;
        priceP: number;
    }]
    
}

export const PizzaList=({pizzas}:IPizza)=>{
const{openModal}=useContext(PizzaContext)

    return(
        <ul>
            {openModal?<ModalPedidos/>:null}
            {pizzas.map((pizza)=>{
                return <PizzaCard key={pizza.id} pizza={pizza}/>
            })}
        </ul>
    )
}




