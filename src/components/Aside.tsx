import Confidential from "./Confidential";
import Explore from "./Explore";
import Footer from "./Footer";
import Library from "./Library";

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
