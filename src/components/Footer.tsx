import Button from "../composable/Button";

export default function Footer() {
  return (
    <footer className="flex justify-between mt-6 p-2 bg-gradient-to-r from-pink via-purple to-indigo">
      <div>
        <p>EXTRAIT SUR SPOTIFY</p>
        <p>
          Inscrivez-vous pour écouter titres et podcast en illimité, avec
          quelques coupures pubs. Pas besoin de carte de crédit.
        </p>
      </div>
      <Button
        className="bg-white text-black px-10 py-3 rounded-full"
        content="S'inscrire gratuitement"
      />
    </footer>
  );
}
