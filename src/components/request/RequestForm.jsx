import { FaLock } from "react-icons/fa";

export default function RequestForm() {
  const formStyles = {
    input: "py-3 pl-6 pr-14 border border-gray-300 flex-grow",
    row: "flex justify-between w-full mb-3 gap-3",
    iconDiv: "flex gap-2 items-center"
  };

  return (
    <div className="h-[260px] pt-3.5 relative w-[90%] mx-auto bg-white flex gap-4 flex-col pb-2 shadow-md">
      <div className="flex items-center justify-between px-8 pt-4 mb-4 gap-3 pr-16">
        <h1 className="pl-3 w-max mt-2 text-black/90 leading-none tracking-tighter font-bold antialiased text-3xl">
          Describe your <span className="text-blue-500/100">plumbing</span>{" "}
          requirement to get a quote
        </h1>
        <div className="flex text-xs gap-5 mt-4">
          <div className="flex gap-2 items-center whitespace-nowrap">
            <FaLock className="text-green-600" />
            <p>Your information is 100% safe and secure</p>
          </div>
          <div className="flex gap-2 items-center whitespace-nowrap">
            <FaLock className="text-green-600" />
            <p>You will receive a response within minutes</p>
          </div>
        </div>
      </div>
      <form className="w-[90%] px-10 pb-8">
        <div className={formStyles.row}>
          <input
            type="text"
            placeholder="Name"
            className={formStyles.input}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className={formStyles.input}
          />
          <input
            type="text"
            placeholder="Email Address"
            className={formStyles.input}
          />
          <input
            type="text"
            placeholder="Suburb"
            className={formStyles.input}
          />
        </div>
        <div className="flex justify-between w-full mb-3 gap-3">
          <input
            type="text"
            placeholder="Service type"
            className="py-3 pl-6 pr-14 border border-gray-300"
            style={{ width: "calc(25% - 0.75rem)" }}
          />
          <input
            type="text"
            placeholder="Describe your plumbing job"
            className="py-3 pl-6 pr-14 border border-gray-300"
            style={{ width: "calc(50% - 0.375rem)" }}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white flex justify-center items-center font-semibold"
            style={{ width: "calc(25% - 0.75rem)" }}
          >
            Get a free quote
          </button>
        </div>
      </form>
    </div>
  );
}
