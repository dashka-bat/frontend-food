"use client";
import { useState, useEffect } from "react";
import { CategoryType } from "@/app/_components/types";
import { Badge } from "@/components/ui/badge";
import Food from "@/app/_components/food";
import AddFood from "@/app/_components/addFood";
import AddCategory from "@/app/_components/addCategory";
import EditDish from "@/app/_components/editDishe";

export default function FoodCetgory() {
  const [categories, setCategory] = useState<CategoryType[]>([]);
  const [submit, setSubmit] = useState("");
  const [modalopen, setModalopen] = useState(false);

  const addCategory = async () => {
    const res = await fetch(`http://localhost:8000/food-category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ categories }),
    });
    const data = await res.json();
    setCategory([...categories, data.foodname]);
    console.log(data.foodname);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:8000/food-category`);
      const data = await res.json();
      setCategory(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="bg-white h-[236px] w-[1700px] rounded-xl mt-20 ml-11">
        <div>Dishes Category</div>
        {categories?.map((category) => (
          <Badge
            className="w-[145px] h-[36px] text-[14px] ml-5 rounded-full text-center mt-3"
            key={category._id}
            // variant="outline"
          >
            {category?.categoryName}
          </Badge>
        ))}
        <button
          className="bg-red-500 rounded-full w-[36px] h-[36px] ml-3"
          onClick={() => setModalopen(true)}
        >
          +
        </button>
      </div>
      <div className="bg-white w-[1700px] h-screen ml-12 mt-10 rounded-xl">
        <div>Appetizers</div>
        <div className="grid grid-cols-4 gap-3">
          <div>
            <div className="w-[270px] h-[241px] bg-white border-[2px] border-black rounded-xl ">
              {" "}
              <button className="bg-red-500 rounded-full w-[36px] h-[36px] ml-[110px] mt-[80px]">
                +
              </button>
              <div>
                Add new Dish to <div>Appzetires</div>
              </div>
            </div>
          </div>
          <Food />
          <Food />
          <Food />
          <Food />
          <Food />
          <Food />
        </div>
        {/* <AddFood /> */}
        {modalopen && <AddCategory />}
        {/* <EditDish /> */}
      </div>
    </div>
  );
}
