import Vulcan from "../../assets/vulcan.jpg";
import Thermann from "../../assets/thermann.png";
import Parisi from "../../assets/parisi.jpg";
import Grohe from "../../assets/grohe.png";
import Dux from "../../assets/DUX.jpg";
import Aquamax from "../../assets/aquamax.jpg";
import Rheem from "../../assets/rheem.png";

export default function ServicesFooter() {
  const imgSize = "w-[120px] h-[60px]";

  return (
    <div className="h-full antialiased flex flex-col w-[90%] justify-center mx-auto mt-12">
      <div className="flex flex-row items-center mb-8 mt-4">
        <h2 className="text-[1.2rem] font-bold mr-14">
          We use well known brands including
        </h2>
        <div className="flex-grow border-t border-gray"></div>
      </div>

      <div className="flex flex-row justify-between mb-20">
        <img
          className={imgSize}
          src={Vulcan}
          alt="Vulcan"
        />
        <img
          className={imgSize}
          src={Thermann}
          alt="Thermann"
        />
        <img
          className={imgSize}
          src={Parisi}
          alt="Parisi"
        />
        <img
          className={imgSize}
          src={Grohe}
          alt="Grohe"
        />
        <img
          className={imgSize}
          src={Dux}
          alt="Dux"
        />
        <img
          className={imgSize}
          src={Aquamax}
          alt="Aquamax"
        />
        <img
          className={imgSize}
          src={Rheem}
          alt="Rheem"
        />
      </div>
    </div>
  );
}
