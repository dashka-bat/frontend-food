"use client";
import Food from "./food";
import { useState, useEffect } from "react";
import { foodType } from "./types";
export function OneFood({ setFood, setEditDish }: any) {
  const [category, setCategoryname] = useState<foodType[]>([]);
  useEffect(() => {
    const Data = async () => {
      const res = await fetch(`http://localhost:8000/food`);
      const data = await res.json();

      setCategoryname(data);
    };
    Data();
  }, []);
  console.log(category);

  return (
    <div>
      <div>
        <div>
          {category?.map((food) => (
            <div key={food._id}>{food.category?.categoryName}</div>
          ))}
        </div>
        <div></div>
        <div className="grid grid-cols-4 gap-3">
          <div>
            <div className="w-[270px] h-[241px] bg-white border-[2px] border-black rounded-xl ">
              {" "}
              <button
                className="bg-red-500 rounded-full w-[36px] h-[36px] ml-[110px] mt-[80px]"
                onClick={() => setFood(true)}
              >
                +
              </button>
              <div>
                Add new Dish to <div>Appzetires</div>
              </div>
            </div>
          </div>{" "}
          <div>
            <Food setEditDish={setEditDish} />
          </div>
        </div>
      </div>
    </div>
  );
}
