import { RiDoubleQuotesL } from "react-icons/ri";
import Rating from "./Rating";

export default function ClientsBanner() {
  const clientStyles = {
    name: "text-2xl font-medium",
    text: "text-sm leading-6 tracking-wide mb-2",
    place: "text-blue-500 font-bold text-lg tracking-wide",
    icon: "text-blue-500 text-5xl scale-x-[-1]",
    container: "flex flex-col w-[300px] items-center text-center"
  };
  return (
    <div className="pt-24 w-[90%] mx-auto antialiased mb-36">
      <h1 className="font-extrabold text-black/85 text-center text-7xl mb-10">
        What our clients say.
      </h1>
      <div className="flex justify-around">
        <div className={clientStyles.container}>
          <RiDoubleQuotesL className={clientStyles.icon} />
          <h1 className={clientStyles.name}>John Smith</h1>
          <p className={clientStyles.text}>
            This is placeholder textThis is placeholder textThis is placeholder
            textThis is placeholder text
          </p>
          <Rating />
          <p className={clientStyles.place}>Abbotsford</p>
        </div>
        <div className={clientStyles.container}>
          <RiDoubleQuotesL className={clientStyles.icon} />
          <h1 className={clientStyles.name}>John Smith</h1>
          <p className={clientStyles.text}>
            This is placeholder textThis is placeholder textThis is placeholder
            textThis is placeholder text
          </p>
          <Rating />
          <p className={clientStyles.place}>Five Dock</p>
        </div>
        <div className={clientStyles.container}>
          <RiDoubleQuotesL className={clientStyles.icon} />
          <h1 className={clientStyles.name}>John Smith</h1>
          <p className={clientStyles.text}>
            This is placeholder textThis is placeholder textThis is placeholder
            textThis is placeholder text
          </p>
          <Rating />
          <p className={clientStyles.place}>Ultimo</p>
        </div>
      </div>
    </div>
  );
}
