import paymentCard from "../../assets/payment-card.png";

export default function RepairOverlay() {
  const styles = {
    num: "text-light-blue text-5xl font-extrabold",
    title: "font-extrabold text-xl mt-2",
    text: "tracking wide text-sm",
    container: "w-1/3 h-full flex justify-center items-center relative"
  };
  return (
    <div className="relative items-center antialiased flex flex-col h-[380px] -mt-12">
      <div className="h-3/4 w-[85%] bg-[#024881] text-white flex">
        <div className="w-1/4 flex justify-center items-center">
          <div className="bg-white h-[180px] w-[180px] rounded-full flex items-center justify-center">
            <h1 className="text-blue-900 font-extrabold text-[2.25rem]">
              LOGO
            </h1>
          </div>
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center tracking-wide">
          <h1 className="text-2xl mb-2">Ask about our payment plans</h1>
          <h2 className="text-5xl font-extrabold">Repair now, Pay Later</h2>

          <div className="flex gap-4 mt-8 justify-around font-bold">
            <div className="hover:opacity-80 hover:cursor-pointer border border-white py-3 px-5">
              <p>1300 000 000</p>
            </div>

            <div className="hover:opacity-80 hover:cursor-pointer border border-white py-3 px-5 bg-white text-light-blue">
              <p>Get a free quote</p>
            </div>
          </div>
        </div>

        <div className="w-1/4 overflow-hidden">
          <img
            className="scale-150 -rotate-12"
            src={paymentCard}
          />
        </div>
      </div>

      <div className="flex w-[85%] h-1/4 bg-white text-black text-center relative">
        <div className={styles.container}>
          <div className="w-full flex justify-center items-center gap-4">
            <h1 className={styles.num}>01</h1>
            <div className="flex flex-col leading-6 text-left">
              <h2 className={styles.title}>Do it now</h2>
              <p className={styles.text}>
                Big jobs or little jobs, repaired today.
              </p>
            </div>
          </div>
          <div className="border-r border-gray h-[80%]"></div>
        </div>

        <div className={styles.container}>
          <div className="w-full flex justify-center items-center gap-4">
            <h1 className={styles.num}>02</h1>
            <div className="flex flex-col leading-6 text-left">
              <h2 className={styles.title}>Pay later</h2>
              <p className="w-3/4 tracking wide text-sm">
                Pay it off in small, affordable installments.
              </p>
            </div>
          </div>
          <div className="border-l-2 border-gray h-[80%]"></div>
        </div>

        <div className={styles.container}>
          <div className="w-full flex justify-center items-center gap-4">
            <h1 className={styles.num}>03</h1>
            <div className="flex flex-col leading-6 text-left">
              <h2 className={styles.title}>No interest ever</h2>
              <p className={styles.text}>Talk to us to find out more.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
