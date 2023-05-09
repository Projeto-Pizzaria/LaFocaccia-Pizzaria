"use client"


interface IError{
    error:Error,
    reset:()=> void
}
import { useEffect } from "react"

const PageError=({error,reset}:IError)=>{

    useEffect(()=>{
console.log(error)
    },[])

return(
    <h1>Algo deu errado !</h1>
)
}

export default PageError