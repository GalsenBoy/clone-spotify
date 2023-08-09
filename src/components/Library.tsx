import Discover from "../composable/Discover";
import Icon from "../composable/Icon";

export default function Library() {
  return (
    <section className="max-w-xs bg-black ">
      <div className="flex justify-between p-2">
        <div className="flex gap-2">
          <Icon name="Library" color="red" size={24} />
          <span>Bibliothèque</span>
        </div>
        <div>
          <Icon name="Plus" color="red" size={24} />
        </div>
      </div>
      <div className="h-49 overflow-auto mt-3">
        <Discover
          title="Créer votre première playlist"
          subtitle="C'est simple, nous allons vous aider"
          buttonContent="Créer une playlist"
        />
        <Discover
          title="Cherchons quelques podcasts auxquels vous abonner"
          subtitle="Nous vous transmettrons des informations sur les nouveaux épisodes"
          buttonContent="Parcourir les podscasts"
          className="my-5"
        />
      </div>
    </section>
  );
}
