import Button from "../composable/Button";
import Icon from "../composable/Icon";

export default function Library() {
  return (
    <div className="max-w-xs p-2 bg-black border">
      <div className="flex justify-between ">
        <div className="flex gap-2">
          <Icon name="Library" color="red" size={24} />
          <span>Bibliothèque</span>
        </div>
        <div>
          <Icon name="Plus" color="red" size={24} />
        </div>
      </div>
      <div>
        <p className="font-bold pt-2">Créez votre première playlist</p>
        <p className="text-xs font-bold pt-2 pb-2 ">
          C'est simple, nous allons vous aider
        </p>
        <Button
          color="black"
          back="white"
          px={4}
          py={1}
          content="Créer une playlist"
        />
      </div>
      <div></div>
    </div>
  );
}
