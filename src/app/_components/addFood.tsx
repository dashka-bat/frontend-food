import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { foodType } from "./types";

// export function InputFile() {
//   return (
//     <div className="grid w-full max-w-sm items-center gap-1.5">
//       <Label htmlFor="picture">Picture</Label>
//       <Input id="picture" type="file" />
//     </div>
//   );
// }

// export function InputWithLabel() {
//   return (
//     <div className="grid w-full max-w-sm items-center gap-1.5">
//       <Label htmlFor="email">Email</Label>
//       <Input type="email" id="email" placeholder="Email" />
//     </div>
//   );
// }

export default function AddFood({ setFood }: any) {
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
  });

  return (
    <div>
      <div className="bg-white w-[460px] h-[592px] border-[2px] border-green-400">
        <div className="flex justify-between ">
          <div>Add new Dish to Appetizers</div>
          <div>
            <button
              className="bg-white border-[2px] p-2 rounded-full"
              onClick={() => setFood(false)}
            >
              X
            </button>
          </div>
        </div>
        <div className="flex">
          <div>
            Food name
            <Input onChange={(e) => {}} placeholder="Type of food"></Input>
          </div>
          <div>
            Foood price
            <Input placeholder="Enter price"></Input>
          </div>
        </div>
        <div>
          ingredients
          <Input
            placeholder="List ingredients"
            className="w-[412px] h-[90px]"
          ></Input>
        </div>
        <div>
          Food image
          <input
            type="file"
            className="w-[412px] h-[138px] bg-slate-400"
          ></input>
        </div>
        <Button>Add Dish</Button>
      </div>
    </div>
  );
}
