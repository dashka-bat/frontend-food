"use client";
import { useState, useEffect } from "react";
import { CategoryType } from "@/app/_components/types";

export default function FoodCetgory() {
  const [categories, setCategory] = useState<CategoryType[]>([]);

  const addCategory = async () => {
    const categoryName = prompt(`enter new category name`);
    const res = await fetch(`http://localhost:8000/food-category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ categoryName }),
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
      {categories?.map((category) => (
        <div className="text-white" key={category?._id}>
          {category?.categoryName}
        </div>
      ))}
      <button className="bg-red-600 rounded-full w-8" onClick={addCategory}>
        +
      </button>
    </div>
  );
}
