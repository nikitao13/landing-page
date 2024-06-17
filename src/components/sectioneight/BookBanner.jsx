import { FaLock } from "react-icons/fa";

export default function BookBanner() {
  const formStyles = {
    input: "py-3 pl-6 pr-14 border border-gray-300 flex-grow",
    row: "flex justify-between w-full mb-3 gap-3",
    iconDiv: "flex gap-2 items-center"
  };
  return (
    <section className="flex gap-12 w-full px-24 mb-8 h-[550px]">
      <div className="flex flex-col h-[80%] w-2/3 -mt-6">
        <h1 className="font-extrabold text-[4.2rem] mb-10">
          Book a <span className="text-light-blue">plumber</span> near you
        </h1>
        <form>
          <div className={formStyles.row}>
            <input
              type="text"
              placeholder="Full Name*"
              className={formStyles.input}
            />
            <input
              type="text"
              placeholder="Phone Number*"
              className={formStyles.input}
            />
            <input
              type="text"
              placeholder="Email Address*"
              className={formStyles.input}
            />
          </div>
          <div className={formStyles.row}>
            <input
              type="text"
              placeholder="Suburb"
              className={formStyles.input}
            />
            <input
              type="text"
              placeholder="Service type"
              className={formStyles.input}
            />
            <input
              type="text"
              placeholder="Date & time"
              className={formStyles.input}
            />
          </div>
          <div className={formStyles.row}>
            <input
              type="text"
              placeholder="Additional information"
              className="py-3 pl-6 pr-14 border border-gray-300 flex-grow"
            />
            <button
              type="submit"
              className="bg-light-blue text-white flex justify-center items-center font-semibold hover:opacity-80"
              style={{ width: "calc(33.333% - 0.5rem)" }}
            >
              Get a free quote
            </button>
          </div>
          <div className="flex text-xs w-full gap-9 mt-8">
            <div className={formStyles.iconDiv}>
              <FaLock className="text-green-600" />
              <p>Your information is 100% safe and secure</p>
            </div>
            <div className={formStyles.iconDiv}>
              <FaLock className="text-green-600" />
              <p>You will recieve a response within minutes</p>
            </div>
          </div>
        </form>
      </div>

      <div className="h-[70%] w-1/3 bg-gray-700/90 text-white flex justify-center items-center hover:opacity-80 cursor-pointer">
        <h2 className="text-3xl font-extrabold">Map</h2>
      </div>
    </section>
  );
}
