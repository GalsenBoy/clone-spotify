import TopHeader from "./TopHeader";
import Spotify from "./Spotify";

export default function Header() {
  return (
    <header
      style={{ gridRow: "-3/-1" }}
      className="  bg-black px-6 pb-6 my-2 mr-2 rounded-md w-full h-full overflow-auto"
    >
      <TopHeader />
      <Spotify />
    </header>
  );
}
