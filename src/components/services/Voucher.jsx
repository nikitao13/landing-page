export default function Voucher() {
  return (
    <div className="pl-2 tracking-tight font-bold antialiased mx-auto bg-yellow-400 mt-10 h-20 w-[18rem] flex items-center justify-center relative overflow-hidden clip-path-notched-br">
      <div className="h-[80%] border-2 border-white border-dashed whitespace-nowrap p-2 flex items-center">
        <div className="flex items-baseline">
          <h1 className="text-4xl">
            <span className="text-2xl relative -top-2">&#36;</span>
            50
          </h1>
          <h1 className="text-lg -rotate-90 ml-1">OFF</h1>
        </div>
      </div>
      <h1 className="ml-2 text-xl">When you book online</h1>
    </div>
  );
}
