import "./styles/main.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import RequestBanner from "./components/request/RequestBanner";
import RequestForm from "./components/request/RequestForm";
import Voucher from "./components/services/Voucher";
import ServicesBanner from "./components/services/ServicesBanner";
import DeliverHeader from "./components/deliver/DeliverHeader";
import ServicesFooter from "./components/services/ServicesFooter";
import DeliverBanner from "./components/deliver/DeliverBanner";
import FaqsBanner from "./components/faqs/FaqsBanner";
import LogoBanner from "./components/logobanner/LogoBanner";
import ClientsBanner from "./components/clients/ClientsBanner";
import BookBanner from "./components/book/BookBanner";
import Footer from "./components/footer/Footer";
import RepairOverlay from "./components/faqs/RepairOverlay";

function App() {
  return (
    <div className="overflow-auto w-full flex flex-col max-w-[1700px] min-w-[1400px] mx-auto min-h-screen">
      <div className="mb-1">
        <Header />
      </div>
      <div className="w-full justify-center h-[40rem]">
        <Banner />
      </div>
      <div className="bg-gray-300 max-h-[550px]">
        <RequestBanner />
      </div>
      <div className="relative">
        <div
          className="absolute inset-0 top-0 bg-gray-300"
          style={{ height: "50%" }}
        ></div>
        <div className="relative z-10">
          <RequestForm />
        </div>
        <Voucher />
      </div>
      <ServicesBanner />
      <ServicesFooter />
      <div className="overflow-hidden max-w-[1700px] bg-gray-100">
        <DeliverHeader />
        <DeliverBanner />
        <RepairOverlay />
      </div>
      <div className="bg-gray-100">
        <FaqsBanner />
      </div>
      <LogoBanner />
      <div className="bg-blue-900">
        <div className="bg-gray-100 clip-path-notched-bl -mr-1">
          <ClientsBanner />

          <BookBanner />
        </div>
      </div>
      <div className="h-400px">
        <Footer />
      </div>
    </div>
  );
}

export default App;
