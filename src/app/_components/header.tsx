export function Header() {
  return (
    <header className="h-[68px] bg-[#18181B]">
      <div className="flex justify-between">
        <div className="flex">
          <img src="logo.png"></img>
          <div>
            <div className="flex">
              {" "}
              <div className="text-white text-[20px]">Nom</div>
              <div className="text-red-600 text-[20px]">Nom</div>
            </div>

            <div>
              <div className="text-[12px]">Swift Delivery</div>
            </div>
          </div>

          <div></div>
        </div>
        <input placeholder="search?" className="text-black"></input>
      </div>
    </header>
  );
}
