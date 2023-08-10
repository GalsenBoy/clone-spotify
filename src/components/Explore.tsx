// import { Home as HomeIcon, icons } from 'lucide-react';
import Link from "../composable/Links";
import Icon from "../composable/Icon";

export default function Explore() {
  const exploreData = [
    {
      name: "Home",
      color: "red",
      size: 24,
      to: "/home",
      content: "Accueil",
    },
    {
      name: "Search",
      color: "red",
      size: 24,
      to: "/search",
      content: "Rechercher",
    },
  ];
  return (
    <section className="flex flex-col py-2 pl-6 max-w-xs rounded-md bg-black gap-2 mb-2">
      {exploreData.map((item) => (
        <div className="flex gap-5 py-2">
          <Icon name={item.name} color={item.color} size={item.size} />
          <Link to={item.to} content={item.content} />
        </div>
      ))}
    </section>
  );
}
