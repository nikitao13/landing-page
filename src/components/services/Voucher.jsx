export default function Voucher() {
  return (
    <div className="tracking-tight font-bold antialiased mx-auto bg-yellow-400 h-20 w-[17rem] flex items-center justify-center relative overflow-hidden clip-path-notched-br">
      <div className="h-[80%] border-2 border-white border-dashed whitespace-nowrap p-2 flex items-center">
        <div className="flex items-baseline">
          <h1 className="text-4xl font-black">
            <span className="text-2xl relative -top-2">&#36;</span>
            50
          </h1>
          <h1 className="text-lg -rotate-90 font-black relative -top-2">OFF</h1>
        </div>
      </div>
      <h1 className="ml-3 w-[7rem] font-extrabold tracking-tighter leading-5 text-xl">
        When you book online
      </h1>
    </div>
  );
}
