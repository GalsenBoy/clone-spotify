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

export { libraryData, exploreData, chevronData,configData };
