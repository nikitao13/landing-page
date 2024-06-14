import "./styles/main.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <div className="w-full flex flex-col">
      <div className="mb-1">
        <Header />
      </div>
      <div className="w-full justify-center h-[45rem] overflow-hidden">
        <Banner />
      </div>
    </div>
  );
}

export default App;
