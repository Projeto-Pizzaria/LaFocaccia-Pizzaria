
import { PizzaCard } from "../PizzaCard"

export interface IPizza{
    pizzas:[
        id:number,
        name:string
    ]
}

export const PizzaList=({pizzas}:IPizza)=>{


    return(
        <ul>
            {pizzas.map((pizza)=>{
                return <PizzaCard key={pizza.name} pizza={pizza}/>
            })}
        </ul>
    )
}