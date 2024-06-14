import phone from "../../assets/phone-hand.png";
import RequestForm from "./RequestForm";

export default function RequestBanner() {
  return (
    <div className="flex flex-col bg-white min-h-max">
      <div className="bg-gray-300/80 max-h-[550px]">
        <div className="antialiased h-auto justify-between pl-32 pr-5 flex w-full -mb-8">
          <div className="flex flex-col w-[36%] py-8">
            <h1 className="mb-8 text-[3.9rem] leading-none tracking-tight font-bold text-black/90">
              Request a <span className="text-blue-500">fast</span> quote today
            </h1>
            <p className="tracking-wider">
              We are industry leaders providing quality plumbing, drainage, hot
              water, and roofing-related services to our Community of Customers.
              We&apos;re ready to assist you with all your needs. From routine
              maintenance to emergency repairs and quality installations, we
              have you covered.
            </p>
          </div>
          <div className="w-min-max text-white h-auto mt-26">
            <div className=""></div>
            <img
              className="mt-2 max-w-[25rem] -mb-4 pr-32"
              src={phone}
            />
          </div>
        </div>
        <RequestForm />
      </div>
    </div>
  );
}
