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
  const [foodname, setFoodname] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState([]);
  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "food-delivery");

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dxkgrtted/upload`,
          { method: "POST", body: data }
        );

        if (!response.ok) throw new Error("Image upload failed");

        const dataJson = await response.json();
        setImage(dataJson.secure_url);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    }
  };
  const addFood = async () => {
    const res = await fetch(`http://localhost:8000/food`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        foodName: foodname,
        price: price,
        ingerdients: ingredients,
        image: image,
        category: category,
      }),
    });
    setFood(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:8000/food`);
      const data = await res.json();
      console.log(data);
      setOneFood([
        ...oneFood,
        data.foodName,
        data.price,
        data.ingerdients,
        data.image,
        data.category,
      ]);
      // setFoodname(data.foodname);
      // setPrice(data.price);
      // setIngredients(data.ingredients);
      // setImage(data.image);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="bg-white w-[460px] h-[592px] border-[2px] border-green-400">
        <div className="flex justify-between ">
          <div>
            Add new Dish to{" "}
            {category.map(() => (
              <div>{category}</div>
            ))}
          </div>
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
            <Input
              onChange={(e) => {
                setFoodname(e.target.value);
              }}
              placeholder="Type of food"
            ></Input>
          </div>
          <div>
            Foood price
            <Input
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="Enter price"
            ></Input>
          </div>
        </div>
        <div>
          ingredients
          <Input
            onChange={(e) => {
              setIngredients(e.target.value);
            }}
            placeholder="List ingredients"
            className="w-[412px] h-[90px]"
          ></Input>
        </div>
        <div>
          Food image
          <input
            onChange={handleUpload}
            type="file"
            className="w-[412px] h-[138px] bg-slate-400"
          ></input>
          <div>
            <img src={image}></img>
          </div>
        </div>
        <Button onClick={addFood}>Add Dish</Button>
      </div>
    </div>
  );
}
