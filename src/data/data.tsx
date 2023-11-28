const chevronData = [
  {
    name: "ChevronLeft",
  },
  {
    name: "ChevronRight",
  },
];

const exploreData = [
  {
    name: "Home",
    color: "gray",
    size: 24,
    to: "/home",
    content: "Accueil",
  },
  {
    name: "Search",
    color: "gray",
    size: 24,
    to: "/search",
    content: "Rechercher",
  },
];

const libraryData = [
  {
    title: "Créer votre première playlist",
    subtitle: "C'est simple, nous allons vous aider",
    buttonContent: "Créer une playlist",
  },
  {
    title: "Cherchons quelques podcasts auxquels vous abonner",
    subtitle:
      "Nous vous transmettrons des informations sur les nouveaux épisodes",
    buttonContent: "Parcourir les podscasts",
    className: "my-5",
  },
];

export { libraryData, exploreData, chevronData };
