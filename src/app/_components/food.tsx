"use client";
import { Pencil } from "lucide-react";
import { useState, useEffect } from "react";
import { foodType } from "./types";
export default function Food({ setEditDish }: any) {
  const [oneFood, setOneFood] = useState<foodType[]>([]);
  const addFood = async () => {
    const res = await fetch(`http://localhost:8000/food`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:8000/food`);
      const data = await res.json();
      setOneFood(data);
    };
    fetchData();
  });
 
  return (
    <div>
      <div className="w-[270px] h-[241px] bg-white border-[2px] border-black rounded-xl">
        {oneFood?.map((food) => (
          <div key={food._id}>
            {food.foodName}
            <div>
              {" "}
              <img className="w-[200px] h-[100px]" src={food.image} alt="" />
            </div>
            <div>{food.ingerdients}</div>
            <div>{food.price}$</div>
          </div>
        ))}
        <button
          onClick={() => setEditDish(true)}
          className="border-[2px] border-red-500"
        >
          <Pencil />
        </button>
      </div>
    </div>
  );
}
