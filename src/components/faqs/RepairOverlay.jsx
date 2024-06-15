import paymentCard from "../../assets/payment-card.png";

export default function RepairOverlay() {
  return (
    <div className="items-center antialiased flex flex-col h-[420px] bg-gray-100">
      <div className="h-3/4 w-[85%] bg-blue-900 text-white flex">
        <div className="w-1/4 flex justify-center items-center">
          <div className="bg-white h-[180px] w-[180px] rounded-full flex items-center justify-center">
            <h1 className="text-blue-900 font-extrabold text-[2.25rem]">
              LOGO
            </h1>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center tracking-wide">
          <h1 className="text-2xl mb-2">Ask about our payment plans</h1>
          <h2 className="text-5xl font-extrabold">Repair now, Pay Later</h2>
          <div className="flex gap-4 mt-8 justify-around font-bold">
            <div className="border border-white py-3 px-5">
              <p>1300 000 000</p>
            </div>
            <div className="border border-white py-3 px-5 bg-white text-blue-500">
              <p>Get a free quote</p>
            </div>
          </div>
        </div>
        <div className="w-1/4 overflow-hidden">
          <img
            className="scale-150 -rotate-12"
            src={paymentCard}
          />
        </div>
      </div>
      <div className="flex w-[85%] h-1/4 bg-white text-black text-center relative">
        <div className=" w-1/3 h-full bg-red-500 flex justify-center items-center relative">
          <div className="w-full flex justify-center items-center gap-4">
            <h1 className="text-white text-5xl font-extrabold">01</h1>
            <div className="flex flex-col leading-6 text-left">
              <h2 className="font-extrabold text-xl">Do it now</h2>
              <p className="tracking wide text-sm">Big jobs or little jobs, repaired today.</p>
            </div>
          </div>
          <div className="border-r border-gray h-[80%]"></div>
        </div>
        <div className="w-1/3 h-full bg-yellow-500 flex justify-center items-center relative">
          <div className="w-full flex justify-center items-center gap-4">
            <h1 className="text-white text-5xl font-extrabold">02</h1>
            <div className="flex flex-col leading-6 text-left">
              <h2 className="font-extrabold text-xl">Pay later</h2>
              <p className="w-3/4 tracking wide text-sm">Pay it off in small, affordable installments.</p>
            </div>
          </div>
          <div className="border-l-2 border-gray h-[80%]"></div>
        </div>
        <div className="w-1/3 h-full bg-blue-500 flex justify-center items-center relative">
          <div className="w-full flex justify-center items-center gap-4">
            <h1 className="text-white text-5xl font-extrabold">03</h1>
            <div className="flex flex-col leading-6 text-left">
              <h2 className="font-extrabold text-xl">No interest ever</h2>
              <p className="tracking wide text-sm">Talk to us to find out more.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
