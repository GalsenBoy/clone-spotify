import ConfigChild from "../composable/ConfigChild";
import Link from "../composable/Links";

export default function Confidential() {
  return (
    <section className="max-w-xs p-4">
      <ConfigChild
        content="Légal"
        to="/legal"
        secondContent="Centre de confidentialité"
        secondTo="/center"
      />
      <ConfigChild
        content="Protection des données"
        to="/protection"
        secondContent="Paramètres des cookies"
        secondTo="/cookie"
      />
      <ConfigChild
        content="A propos des pubs"
        to="/about"
        secondContent="Accessibilité"
        secondTo="/access"
      />
      <div className="mt-4 text-xs">
        <Link content="cookies" to="/co" />
      </div>
    </section>
  );
}
