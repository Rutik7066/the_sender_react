import First from "../components/First";
import Pricing from "../components/Pricing";
import Second from "../components/Second";
import Third from "../components/Third";
import Ending from "../components/Ending";
import Navbar from "../components/NavBar";
function Home() {
  return (
    <div className="flex flex-col justify-center w-screen bg-slate-100">
      <Navbar />
      <First />
      <Second />
      <Third />
      <Pricing />
      <Ending />
    </div>
  );
}

export default Home;
