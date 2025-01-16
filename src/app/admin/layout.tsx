import { Badge } from "@/components/ui/badge";
import { Microwave } from "lucide-react";
import { Car } from "lucide-react";
import { Settings } from "lucide-react";
import { Children } from "react";
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex bg-gray-200 gap-7 ">
        <div>
          {/* <main className="min-h-screen"></main> */}
          <div className="bg-white h-screen w-[205px]">
            <div className="flex">
              <img
                className="mt-6"
                src="https://res.cloudinary.com/dxkgrtted/image/upload/v1737012655/food-delivery/zjp3dsh5jb9a6rztp8u8.png"
              ></img>

              <div></div>
            </div>{" "}
            <div className="mt-10">
              <Badge className="pt-2 pb-2 pl-3 pr-3 ">
                <Microwave />
                food menu
              </Badge>
            </div>
            <div className="mt-10">
              <Badge className="pt-2 pb-2 pl-3 pr-3" variant="outline">
                <Car />
                Orders
              </Badge>
            </div>
            <Badge className="pt-2 pb-2 pl-3 pr-3 mt-10" variant="outline">
              <Settings />
              Settings
            </Badge>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
