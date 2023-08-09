import Button from "../composable/Button";
import ConfigChild from "../composable/ConfigChild";
import Icon from "../composable/Icon";
import Link from "../composable/Links";

export default function Confidential() {
  return (
    <section className="max-w-xs p-6">
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
      <div className="flex border w-fit space-x-1 mt-4 rounded-full px-4 py-1">
        <Icon name="Globe" color="red" size={24} />
        <Button content="Français" />
      </div>
    </section>
  );
}
