import sink from "../../assets/sink.jpg";
import plumber from "../../assets/plumber.png";

export default function Banner() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="relative w-full h-full">
        <img
          className="h-full w-[100vw] object-cover transform -translate-x-1/4 ml-28"
          src={sink}
          alt="Sink"
        />

        <div className="absolute inset-0 bg-black opacity-70"></div>
        <img
          className="absolute top-0 right-0 h-full w-[60vw] opacity-90"
          src={plumber}
          alt="Plumber"
        />
      </div>
    </div>
  );
}
