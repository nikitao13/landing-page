import { FaPlus } from "react-icons/fa";

export default function FaqsBanner() {
  const faqStyles = {
    items:
      "pb-4 h-[45px] border-b-2 border-dashed border-black/20 mt-8 font-semibold flex justify-between items-center",
    col: "flex flex-col w-1/2",
    sticker: "-skew-x-12 border border-white py-3 px-4 mx-1.5",
    stickerText: "skew-x-12 font-bold tracking-tight text-sm text-white"
  };
  return (
    <div className="px-12 antialiased">
      <h1 className="font-bold text-5xl mt-12 mb-5">
        Plumber sydney <span className="text-light-blue">faqs</span>
      </h1>
      <p className="text-[0.95rem] mb-6 tracking-wide">
        We are industry leaders providing quality plumbing, drainage, hot water,
        and roofing-related services to our Community of Customers. We&apos;re
        ready to assist you with all your needs. From routine maintenance to
        emergency repairs and quality installations, we have you covered.
      </p>
      <div className="flex-col flex">
        <div className="flex flex-row gap-24">
          <div className={faqStyles.col}>
            <div className={faqStyles.items}>
              <p>What types of service do you offer?</p>
              <FaPlus />
            </div>
            <div className={faqStyles.items}>
              <p>How do I schedule an appointment?</p>
              <FaPlus />
            </div>
            <div className={faqStyles.items}>
              <p>What areas do you service?</p>
              <FaPlus />
            </div>
          </div>
          <div className={faqStyles.col}>
            <div className={faqStyles.items}>
              <p>Do you provide emergency plumbing services?</p>
              <FaPlus />
            </div>
            <div className={faqStyles.items}>
              <p>How do you charge for your services?</p>
              <FaPlus />
            </div>
            <div className={faqStyles.items}>
              <p>Are you licensed and insured?</p>
              <FaPlus />
            </div>
          </div>
        </div>

        <div className="flex mt-12 w-full justify-center mb-10">
          <div className={`${faqStyles.sticker} bg-light-blue`}>
            <p className={faqStyles.stickerText}>1300 000 000</p>
          </div>
          <div className={`${faqStyles.sticker} bg-[#024881]`}>
            <p className={faqStyles.stickerText}>Get a free quote</p>
          </div>
        </div>
      </div>
    </div>
  );
}
