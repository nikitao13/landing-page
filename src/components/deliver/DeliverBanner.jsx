import BgImage from "../../assets/fixing.webp";
import DeliverSticker from "./DeliverSticker";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

export default function DeliverBanner() {
  return (
    <div className="flex h-[600px] w-[120%] overflow-hidden gap-2">
      <div className="py-20 px-28 text-white -skew-x-12 -ml-20 bg-light-blue h-full w-[50%] flex flex-col">
        <h1 className="text-5xl font-bold skew-x-12">What we deliver</h1>
        <p className="max-w-[85%] ml-6 mt-8 skew-x-12 tracking-wider font-thin">
          As a family-owned business, we take immense pride in offering a 24/7
          Service that sets us apart from the rest. With a focus on transparency
          and customer convenience, we believe in keeping things simple and
          hassle-free for our valued customers. That&apos;s why we proudly offer
          a $0 callout, upfront pricing & Lifetime labour warranty, ensuring
          that you know exactly what to expect right from the start.
        </p>
        <div className="flex pl-16 mt-12 gap-5 w-full">
          <DeliverSticker
            Icon={HiOutlineWrenchScrewdriver}
            title="Lifetime labour warranty"
            text="We pride ourselves on our workmanship and guarantee our service."
          />
          <DeliverSticker
            Icon={HiOutlineClipboardDocumentCheck}
            title="Fully licensed & insured"
            text="Our professionals are reliable and provide compliance certificates for your peace of mind."
          />
        </div>
      </div>
      <div
        className="-skew-x-12 bg-cover bg-center h-full w-[50%]"
        style={{ backgroundImage: `url(${BgImage})` }}
      ></div>
    </div>
  );
}
