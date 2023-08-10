import Confidential from "../components/Confidential";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Library from "../components/Library";

export default function Aside() {
  return (
    <aside className="bg-dark p-2">
      <Explore />
      <Library />
      <Confidential />
      <Footer />
    </aside>
  );
}
