import { Badge } from "@/components/ui/badge";
export default function ChangeDelivery() {
  return (
    <div>
      <div className="bg-white w-[364px] h-[200px] rounded-xl">
        <div className="flex justify-between">
          {" "}
          <div className="ml-4 mt-2">Change delivery state</div>
          <div>
            <button className="bg-white rounded-full border-[2px] pl-2 pr-2 mr-6 mt-2">
              X
            </button>
          </div>
        </div>

        <div>
          <Badge className="ml-6">Delivered</Badge>
          <Badge className="ml-6">Pending</Badge>
          <Badge className="ml-6">Cancelled</Badge>
        </div>
        <Badge className="w-[316px] h-[36px] flex justify-center text-[14px] rounded-2xl mt-5 ml-6">
          <div>save</div>
        </Badge>
      </div>
    </div>
  );
}
