"use client";

import { PizzaContext } from "@/providers/PizzaContext";
import { useContext } from "react";



export const PizzaCard = ({ pizza }:any) => {
  const { setOpenModal, setCurrentPizza } = useContext(PizzaContext);

  return (
    <li onClick={() => setCurrentPizza(pizza)}>
      <h1>{pizza.name}</h1>
      <p>{pizza.ingredients}</p>
      <button onClick={() => setOpenModal(true)}>Pedir</button>
    </li>
  );
};
