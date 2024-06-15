export default function ClientsBanner() {
  const clientStyles = {
    name: "text-2xl font-medium",
    text: "text-sm leading-6 tracking-wide",
    place: "text-blue-500 font-bold text-lg tracking-wide"
  };
  return (
    <div className="mt-24 w-[90%] mx-auto antialiased mb-32">
      <h1 className="font-extrabold text-black/85 text-center text-6xl mb-10">
        What our clients say.
      </h1>
      <div className="flex justify-around">
        <div className="flex flex-col w-[300px] items-center text-center">
          <h1 className={clientStyles.name}>John Smith</h1>
          <p className={clientStyles.text}>
            This is placeholder textThis is placeholder textThis is placeholder
            textThis is placeholder text
          </p>
          <div></div>
          <p className={clientStyles.place}>Abbotsford</p>
        </div>
        <div className="flex flex-col w-[300px] items-center text-center">
          <h1 className={clientStyles.name}>John Smith</h1>
          <p className={clientStyles.text}>
            This is placeholder textThis is placeholder textThis is placeholder
            textThis is placeholder text
          </p>
          <div></div>
          <p className={clientStyles.place}>Five Dock</p>
        </div>
        <div className="flex flex-col w-[300px] items-center text-center">
          <h1 className={clientStyles.name}>John Smith</h1>
          <p className={clientStyles.text}>
            This is placeholder textThis is placeholder textThis is placeholder
            textThis is placeholder text
          </p>
          <div></div>
          <p className={clientStyles.place}>Ultimo</p>
        </div>
      </div>
    </div>
  );
}
