


import { PizzaList } from "@/componentes/PizzaList"
import { api } from "@/services/api"






const DashUser= async ()=>{

    const response=await api.get("/pizzas")

    const pizzasList=response.data

  

    return(
        <>
        <h1>User</h1>

       

        <PizzaList pizzas={pizzasList}/>
        
        </>

    )
 }

 export default DashUser