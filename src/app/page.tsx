"use client";
import { useState, useEffect } from "react";
import { CategoryType } from "./_components/types";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { Badge } from "@/components/ui/badge";
export default function Home() {
  const [categories, setCategory] = useState<CategoryType[]>([]);
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
      <Header />
      <div>
        <img
          className="w-screen"
          src="https://res.cloudinary.com/dxkgrtted/image/upload/v1737306582/Image_e4pmho.png"
        ></img>
      </div>
      <div>
        Categories
        <div className="snap-both flex space-x-4 animate-bounce">
          {categories?.map((category) => (
            <div key={category._id}>
              <Badge>{category.categoryName}</Badge>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
