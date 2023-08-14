import Confidential from "./Confidential";
import Explore from "./Explore";
import Library from "./Library";

export default function Aside() {
  return (
    <aside style={{ gridRow: "1/3" }} className="bg-dark p-2 max-w-md">
      <Explore />
      <Library />
      <Confidential />
    </aside>
  );
}
