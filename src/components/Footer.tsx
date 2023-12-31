import Button from "../composable/Button";

export default function Footer() {
  return (
    <footer
      style={{ gridRow: "3/-1", gridColumn: "-3/-1" }}
      className="flex justify-between m-3 p-2 bg-gradient-to-r from-pink via-purple to-indigo"
    >
      <div>
        <p>EXTRAIT SUR SPOTIFY</p>
        <p>
          Inscrivez-vous pour écouter titres et podcast en illimité, avec
          quelques coupures pubs. Pas besoin de carte de crédit.
        </p>
      </div>
      <Button
        className="bg-white text-black px-7 py-3 rounded-full"
        content="S'inscrire gratuitement"
      />
    </footer>
  );
}
