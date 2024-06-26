import sink from "../../assets/sink.jpg";
import plumber from "../../assets/plumber.png";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { FaLaptop } from "react-icons/fa";
import RightStickerGroup from "./RightStickerGroup";

export default function Banner() {
  const sectionStyles = {
    circle:
      "self-start flex items-center justify-center text-[2.5rem] h-[4.5rem] w-[4.5rem] bg-light-blue/90 rounded-full",
    h2: "font-semibold text-xl tracking-wider",
    p: "pb-2 text-sm font-extralight"
  };

  const { circle, h2, p } = sectionStyles;

  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="relative w-full h-full">
        <img
          className="h-full w-[100vw] object-cover transform -translate-x-1/3 ml-28"
          src={sink}
          alt="Sink"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <img
          className="absolute top-0 right-0 h-full w-[57rem] opacity-90"
          src={plumber}
          alt="Plumber"
        />

        <div className="gap-4 w-[40vw] ml-20 mt-12 absolute inset-0 flex flex-col justify-start items-start p-8">
          <h1 className="max-w-[475px] min-w-[448px] leading-[4.85rem] text-white text-7xl font-extrabold antialiased tracking-tight">
            YOUR LOCAL{" "}
            <div
              className="relative inline-block pl-2 pr-14 bg-[#017bff]/85"
              style={{ clipPath: "polygon(0 0, 100% 0, 93% 100%, 0% 100%)" }}
            >
              HOT WATER
            </div>{" "}
            EXPERTS
          </h1>

          <ul className="mt-4 text-white text-lg">
            <li>
              <div className="flex gap-4 h-[5rem] min-w-[285px] whitespace-nowrap">
                <div className={circle}>
                  <HiOutlineWrenchScrewdriver />
                </div>
                <div className="self-center">
                  <h2 className={h2}>Upfront pricing</h2>
                  <p className={p}>
                    Know the price of the job before we start.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex gap-4 h-[5rem]">
                <div className={circle}>
                  <IoCallOutline />
                </div>{" "}
                <div className="self-center">
                  <h2 className={h2}>$0 Call out</h2>
                  <p className={p}>No call out fees.</p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex gap-4 h-[5rem]">
                <div className={circle}>
                  <FaLaptop />
                </div>{" "}
                <div className="self-center">
                  <h2 className={h2}>$50 off for online bookings</h2>
                  <p className={p}>Book online to receive a discount.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="absolute bottom-0 right-10 w-full flex justify-end">
          <RightStickerGroup />
        </div>
      </div>
    </section>
  );
}
