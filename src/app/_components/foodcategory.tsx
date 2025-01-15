"use client"
import { useState,useEffect } from "react";
import { CategoryType } from "./types";



export default function FoodCetgory(){
    const [categories,setCategory]=useState<CategoryType[]>([])

// const addCategory=async ()=>{
// const categoryName=prompt(`enter new category name`)
//     const res=await fetch(`http://localhost:8000/food-category/`,{
//         method:`POST`,
//         headers:{
//             `Content-Type`:`application/json`,
//         },
//         body:JSON.stringify({catgegoryName`})
//     });
//     const data=await res.json()
//     setCategory([...categories])
// }
    useEffect(()=>{
        const fetchData=async ()=>{
            const res=await fetch(`http://localhost:8000/food-category`)
            const data=await res.json()
            setCategory(data)
        }
        fetchData()
    },[])

console.log(categories)


return (
    <div>
            {categories?.map((category)=>
                (<div className="text-white" key={category.id}>{category.categoryname}</div>

                ))}
    {/* <button onClick={""}>add new category</button> */}
    </div>
)

}