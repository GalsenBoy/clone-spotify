import Link from "../composable/Links";

export default function Explore() {
  return (
    <div>
      <Link to={"/home"} content={"Accueil"} />
      <Link to={"/search"} content={"Rechercher"} />
      <h1>BLALBLA</h1>
    </div>
  );
}
