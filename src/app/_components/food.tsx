"use client";
import { Pencil } from "lucide-react";
import { useState } from "react";

export default function Food({ setEditDish }: any) {
  return (
    <div>
      <div className="w-[270px] h-[241px] bg-white border-[2px] border-black rounded-xl">
        <img
          className="w-[240px] h-[129px] rounded-xl"
          src="https://res.cloudinary.com/dxkgrtted/image/upload/v1737013953/food-delivery/nfzl1sq8oleehjfxhqga.png"
          alt=""
        />
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
