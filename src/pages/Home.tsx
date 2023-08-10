import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-dark font-circular">
      <div className="flex">
        <Aside />
        <Header />
      </div>
      <Footer />
    </div>
  );
}
