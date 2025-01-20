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

export default function EditDish({ setEditDish }: any) {
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
              type="file"
              className="w-[288px] h-[116px] border-[2px]"
            ></input>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <button className="border-[2px] border-red-500 w-[48px] h-[40px] rounded-md flex justify-center items-center">
              <Trash></Trash>
            </button>
          </div>
          <div>
            <Button>save changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
