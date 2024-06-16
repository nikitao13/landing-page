import phone from "../../assets/phone-hand.png";
import NoCallSticker from "./NoCallSticker"

export default function RequestBanner() {
  return (
    <div className="flex flex-col min-h-max">
      <div className="antialiased h-auto justify-between pl-20 pr-5 flex w-full -mb-8">
        <div className="flex flex-col w-[45%] py-8">
          <h1 className="w-[90%] mb-8 text-[3.9rem] leading-none tracking-tight font-bold text-black/90">
            Request a <span className="text-light-blue">fast</span> quote today
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
          <div className="flex items-center">
            <NoCallSticker />
          <img className="mt-2 max-w-[23rem] -mb-4 pr-24 ml-10" src={phone} />
          </div>
        </div>
      </div>
    </div>
  );
}
