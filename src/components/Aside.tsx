import Confidential from "./Confidential";
import Explore from "./Explore";
import Library from "./Library";

export default function Aside() {
  return (
    <aside className="bg-dark p-2">
      <Explore />
      <Library />
      <Confidential />
    </aside>
  );
}
