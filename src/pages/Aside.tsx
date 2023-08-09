import Confidential from "../components/Confidential";
import Explore from "../components/Explore";
import Library from "../components/Library";

export default function Aside() {
  return (
    <aside>
      <Explore />
      <Library />
      <Confidential />
    </aside>
  );
}
