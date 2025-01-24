"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { use, useEffect, useState } from "react";

export default function EditDish({ setEditDish }: any) {
  const [editfood, setEditFood] = useState([]);
  const [image, setImage] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:8000/food`);
      const data = await res.json();
      setEditFood(data);
      console.log(data);
    };
    fetchData();
  }, []);
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
  return (
    <div>
      <div className="bg-white w-[472px] h-[596px] border-[2px] border-e-red-700">
        <div className="flex justify-between">
          <div>Dishes info</div>
          <div>
            <Button onClick={() => setEditDish(false)}>X</Button>
          </div>
        </div>
        <div className="flex justify-between">
          <div>Dish name</div>
          <div>
            <Input placeholder="Dish name"></Input>
          </div>
        </div>
        <div className="flex justify-between">
          <div>Dish category</div>
          <div>
            <Popover>
              <PopoverTrigger className="w-[288px] h-[36px] border-[2px]">
                <Badge>Appz</Badge>
              </PopoverTrigger>
              <PopoverContent>
                <div>
                  <div>
                    <Badge>dsadsad</Badge>
                  </div>
                  <div>
                    <Badge>dsadsad</Badge>
                  </div>
                  <div>
                    {" "}
                    <Badge>dsadsadsadsad</Badge>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="flex justify-between">
          <div>ingredients</div>
          <div>
            <Input placeholder="ingedients"></Input>
          </div>
        </div>
        <div className="flex justify-between">
          <div>price</div>
          <div>
            <Input placeholder="price"></Input>
          </div>
        </div>
        <div className="flex justify-between">
          <div>image</div>
          <div>
            <input
              onChange={handleUpload}
              type="file"
              className="w-[288px] h-[116px] border-[2px]"
            ></input>
          </div>
          <img src={image} className="w-[200px] h-[100px]"></img>
        </div>
        <div className="flex justify-between">
          <div>
            <button className="border-[2px] border-red-500 w-[48px] h-[40px] rounded-md flex justify-center items-center">
              <Trash></Trash>
            </button>
          </div>
          <div>
            <Button onClick={() => setEditDish(false)}>save changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
