export default function DeliverHeader() {
    return (
      <div className="relative w-full overflow-hidden h-[6rem] bg-[#0274ff] mb-1">
        <div className="absolute inset-y-0 -right-2 w-[40%] -skew-x-12 bg-[#024881]"></div>
        <div className="flex max-w-[1700px] w-full h-full relative z-10 mx-auto">
          <div className="w-[60%] flex items-center justify-start ml-16">
            <h1 className="text-white font-bold text-3xl">
              Get a free onsite quote
            </h1>
          </div>
          <div className="flex items-center justify-center w-[40%]">
            <div className="-skew-x-12 border border-white p-2.5 mx-2">
              <p className="skew-x-12 font-black tracking-tight text-sm text-white">
                1300 000 000
              </p>
            </div>
            <div className="-skew-x-12 border border-white bg-white p-2.5 mx-2">
              <p className="skew-x-12 font-black tracking-tight text-sm text-light-blue">
                Get a free quote
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  