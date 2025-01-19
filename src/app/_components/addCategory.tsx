"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CategoryType } from "./types";
import { useState, useEffect } from "react";
const [categories, setCategory] = useState<CategoryType[]>([]);
const [submit, setSubmit] = useState("");
const addCategory = async () => {
  const res = await fetch(`http://localhost:8000/food-category`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ categoryName: submit }),
  });
  const data = await res.json();
  setCategory([...categories, data.foodname]);
  console.log(data.foodname);
};
addCategory();

export default function AddCategory() {
  return (
    <div>
      <div className="bg-white w-[460px] h-[272px] rounded-xl border-[2px] border-pink-600">
        <div className="flex justify-between">
          <div>Add new category</div>
          <div>
            <Button>X</Button>
          </div>
        </div>
        <div>
          <Input
            onChange={(e) => {
              setSubmit(e.target.value);
            }}
            placeholder="Type Category name"
          ></Input>
        </div>
        <Button>Add category</Button>
      </div>
    </div>
  );
}
