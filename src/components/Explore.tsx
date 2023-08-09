// import { Home as HomeIcon } from "lucide-react";
import Link from "../composable/Links";
import Icon from "../composable/Icon";

export default function Explore() {
  return (
    <section className="flex flex-col p-2 max-w-xs border rounded-md bg-black gap-2 ">
      <div className="flex gap-5 pt-2 pb-2">
        <Icon name="Home" color="red" size={24} />
        <Link to="/home" content="Accueil" />
      </div>{" "}
      <div className="flex gap-5 pt-2 pb-2">
        <Icon name="Search" color="red" size={24} />
        <Link to="/search" content="Rechercher" />
      </div>
    </section>
  );
}
