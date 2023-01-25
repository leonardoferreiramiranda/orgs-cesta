import logo from "../../assets/logo.png";

import tomate from "../../assets/frutas/Tomate.png";
import brocolis from "../../assets/frutas/Brócolis.png";
import batata from "../../assets/frutas/Batata.png";
import pepino from "../../assets/frutas/Pepino.png";
import abobora from "../../assets/frutas/Abóbora.png";

const cesta = {
  top: {
    title: "Detalhes da cesta",
  },
  main: {
    name: "Cesta de Verduras",
    farmImage: logo,
    farmName: "Jenny Jack Farm",
    description:
      "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    price: "R$ 40,00",
    button: "Comprar",
  },
  itens: {
    title: "Itens da cesta",
    list: [
      {
        name: "Tomate",
        image: tomate,
      },
      {
        name: "Brócolis",
        image: brocolis,
      },
      {
        name: "Batata",
        image: batata,
      },
      {
        name: "Pepino",
        image: pepino,
      },
      {
        name: "Abóbora",
        image: abobora,
      },
    ],
  },
};

export default cesta;
