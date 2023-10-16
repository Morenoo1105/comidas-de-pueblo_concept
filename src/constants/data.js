import images from "./images";

const primeros = [
  {
    title: "Paella de marisco",
    price: "6,75€",
    tags: "Alérgenos",
  },
  {
    title: "Risotto de jamón ibérico",
    price: "6,95€",
    tags: "Alérgenos",
  },
  {
    title: "Caracoles con jamón y chorizo",
    price: "8,50€",
    tags: "Alérgenos",
  },
  {
    title: "Canelones de carne o atún",
    price: "5,50€",
    tags: "Alérgenos",
  },
  {
    title: "Migas a la pastora con huevo frito",
    price: "5,50€",
    tags: "Alérgenos",
  },
];

const segundos = [
  {
    title: "Estofado de ternera Asturiana",
    price: "6,95€",
    tags: "Alérgenos",
  },
  {
    title: "Rape en salsa verde con langostinos",
    price: "6,50€",
    tags: "Alérgenos",
  },
  {
    title: "Vieira rellena de merluza",
    price: "4,50€",
    tags: "Alérgenos",
  },
  {
    title: "Redondo de pollo trufado",
    price: "6,00€",
    tags: "Alérgenos",
  },
];

const postres = [
  {
    imgUrl: images.award01,
    title: "Tarta de queso (especialidad de la casa)",
    subtitle: "3,50€",
  },
  {
    imgUrl: images.award02,
    title: "Tarta de dulce de leche",
    subtitle: "3,50€",
  },
  {
    imgUrl: images.award03,
    title: "Coulant con chocolate",
    subtitle: "3,50€",
  },
];

export default { primeros, segundos, postres };
