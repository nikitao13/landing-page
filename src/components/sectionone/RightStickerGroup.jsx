import RightSticker from "./RightSticker";

export default function RightStickerGroup() {
  return (
    <div className="flex gap-4 h-[200px]">
      <RightSticker
        num={"4.9"}
        text={"Facebook"}
        rating={true}
        colour={"bg-sticker-blue"}
      />

      <RightSticker
        num={"5.0"}
        text={"Google"}
        rating={true}
        colour={"bg-sticker-red"}
      />

      <div className="antialiased leading-snug -skew-x-12 relative flex flex-col items-center justify-center bg-sticker-yellow w-40 h-44">
        <div className="text-[3.8rem] font-black skew-x-12 flex flex-col items-center justify-center">
          <h1>24h</h1>
        </div>
        <div>
          <h2 className="pl-4 mx-4 text-[1.2rem] skew-x-12 text-center font-bold leading-5">
            Emergency Services
          </h2>
        </div>
      </div>
    </div>
  );
}
