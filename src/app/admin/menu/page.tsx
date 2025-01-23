"use client";
import { useState, useEffect } from "react";
import { CategoryType } from "@/app/_components/types";
import { Badge } from "@/components/ui/badge";
import Food from "@/app/_components/food";
import AddFood from "@/app/_components/addFood";
import AddCategory from "@/app/_components/addCategory";
import EditDish from "@/app/_components/editDishe";
import { OneFood } from "@/app/_components/onFood";

export default function FoodCetgory(oneFood: any) {
  const [categories, setCategory] = useState<CategoryType[]>([]);
  const [submit, setSubmit] = useState("");
  const [modalopen, setModalopen] = useState(false);
  const [food, setFood] = useState(false);
  const [editdish, setEditDish] = useState(false);

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
      <div className="bg-white h-[236px] w-[1700px] rounded-xl mt-20 ml-11">
        <div>Dishes Category</div>
        <div>
          <Badge className="w-[150px] h-[40px] text-[16px]">All dishes</Badge>
        </div>
        {categories?.map((category) => (
          <Badge
            className="w-[145px] h-[36px] text-[14px] ml-5 rounded-full text-center mt-3"

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
      <div className="bg-white w-[1700px] h-screen ml-12 mt-10 rounded-xl relative">
        <div>
          <OneFood
            oneFood={oneFood}
            setEditDish={setEditDish}
            setFood={setFood}
          />
        </div>
        <div>
          <OneFood
            oneFood={oneFood}
            setEditDish={setEditDish}
            setFood={setFood}
          />
        </div>
        <div>
          <OneFood
            oneFood={oneFood}
            setEditDish={setEditDish}
            setFood={setFood}
          />
        </div>
        {/* <div>
          <OneFood setEditDish={setEditDish} setFood={setFood} />
        </div>
        <div>
          <OneFood setEditDish={setEditDish} setFood={setFood} />
        </div>
        <div>
          <OneFood setEditDish={setEditDish} setFood={setFood} />
        </div> */}
        {/* <AddFood /> */}
        <div className="absolute top-[100px] left-[490px]">
          {modalopen && (
            <AddCategory
              categories={categories}
              setCategory={setCategory}
              setModalopen={setModalopen}
            />
          )}
          <div>{food && <AddFood setFood={setFood} />}</div>
          <div>{editdish && <EditDish setEditDish={setEditDish} />}</div>
        </div>
      </div>
    </div>
  );
}
