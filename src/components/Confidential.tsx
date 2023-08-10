import Button from "../composable/Button";
import ConfigChild from "../composable/ConfigChild";
import Icon from "../composable/Icon";
import Link from "../composable/Links";

export default function Confidential() {
  const configData = [
    {
      content: "Légal",
      to: "/legal",
      secondContent: "Centre de confidentialité",
      secondTo: "/center",
    },
    {
      content: "Protection des données",
      to: "/protection",
      secondContent: "Paramètres des cookies",
      secondTo: "/cookie",
    },
    {
      content: "A propos des pubs",
      to: "/about",
      secondContent: "Accessibilité",
      secondTo: "/access",
    },
  ];
  return (
    <section className="max-w-xs p-6 bg-black rounded-b-md">
      {configData.map((item, index) => (
        <ConfigChild
          key={index}
          content={item.content}
          to={item.to}
          secondContent={item.secondContent}
          secondTo={item.secondTo}
        />
      ))}
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