import Icon from "../composable/Icon";

export default function Library() {
  return (
    <div className="max-w-xs p-2">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Icon name="Library" color="red" size={24} />
          <span>Bibliothèque</span>
        </div>
        <div>
          <Icon name="Plus" color="red" size={24} />
        </div>
      </div>
      <div>
        <p>Créez votre première playlist</p>
        <p>C'est simple, nous allons vous aider</p>
      </div>
      <div></div>
    </div>
  );
}
