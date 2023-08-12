import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  const preventContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };
  return (
    <div
      onContextMenu={preventContextMenu}
      style={{ width: "100%", height: "100%" }}
      className="bg-dark font-circular"
    >
      <div className="flex">
        <Aside />
        <Header />
      </div>
      <Footer />
    </div>
  );
}
