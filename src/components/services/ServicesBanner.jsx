import Ribbon from "./Ribbon";

export default function ServicesBanner() {
  return (
    <>
      <div className="antialiased flex flex-col w-full items-center mt-6 mb-12">
        <div>
          <h1 className="font-bold tracking-tight text-5xl text-center mb-4">
            Plumbing <span className="text-blue-500">services</span> we offer
          </h1>
          <p className="tracking-wide w-[75%] text-center mx-auto">
            We are industry leaders providing quality plumbing, drainage, hot
            water, and roofing-related services to our Community of Customers.
          </p>
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-6">
        <div className="w-full text-white flex gap-4 justify-center">
          {["Blocked Drains", "Hot Water", "Leaking Pipes", "Gas Fitting"].map(
            (service, index) => (
              <div
                key={index}
                className="relative bg-gray-500/70 h-[210px] w-[310px]"
              >
                <Ribbon text={service.toUpperCase()} />
              </div>
            )
          )}
        </div>
        <div className="w-full text-white flex gap-4 justify-center">
          {[
            "Leaking Taps",
            "Pipe Relining",
            "Leaking Toilets",
            "Leak Detection"
          ].map((service, index) => (
            <div
              key={index}
              className="relative bg-gray-500/70 h-[210px] w-[310px]"
            >
              <Ribbon text={service.toUpperCase()} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
