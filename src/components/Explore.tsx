// import { Home as HomeIcon } from "lucide-react";
import Link from "../composable/Links";
import Icon from "../composable/Icon";

export default function Explore() {
  return (
    <div className="flex flex-col p-2 max-w-xs border rounded-md bg-black">
      <div>
        <Icon name={"Home"} color={"red"} size={48} />
        <Link classLink={""} to={"/home"} content={"Accueil"} />
      </div>{" "}
      <Link classLink="" to={"/search"} content={"Rechercher"} />
    </div>
  );
}
