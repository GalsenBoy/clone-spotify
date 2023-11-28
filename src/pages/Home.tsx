import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  // const preventContextMenu = (e: React.MouseEvent) => {
  //   e.preventDefault();
  // };
  return (
    <div
      // onContextMenu={preventContextMenu}
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "430px 1fr",
        gridTemplateRows: "repeat(2,1fr)",
      }}
      className="bg-dark font-circular"
    >
      <Aside />
      <Header />
      <Footer />
    </div>
  );
}
