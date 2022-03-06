import React, { useState } from "react";
import MainPage from "./MainPage";
import "./App.css";
import profilna from "./assets/profilna.jpg";
import reactLogo from "./assets/react.png";
import angularLogo from "./assets/angular.png";
import nodeLogo from "./assets/node.png";
import gqlLogo from "./assets/graphql.png";

export enum DataType {
  TEXT,
  TEXTIMG,
  IMG,
  IMGTEXT,
}
export interface Data {
  id: number;
  data: TextData | TextImgData | ImgData;
  type: DataType;
  background: string;
}

export interface TextData extends Data {
  text: Text;
}

export interface Text {
  naslov: string;
  text: string;
}

export interface TextImgData extends Data {
  text: Text;
  img: Img;
  side: boolean;
}

export interface Img {
  src: string;
  alt: string;
}

export interface ImgData extends Data {
  naslov: string;
  imgs: Img[];
}

const App = () => {
  let allData: Data[] = [
    {
      id: 1,
      type: DataType.TEXTIMG,
      data: {
        text: {
          naslov: "Filip Kranjec",
          text: "Ja sam Filip Kranjec, student treće godine na Fakultetu Organizacije i Informatike u Varaždinu. Trenutno radim studentski posao kao Angular developer te mogu reći da sam stekao dosta iskustva u web developementu, ali nikada nije dovoljno. Volio bih naučiti u dubinu što više frameworka za izradu web aplikacija te koristiti nove tehnologije. Do sada sam se susreo sa izgradnjom web aplikacija u Angular, Reactu i NextJS-u te sam shvatio da svaki framework ima svojih prednosti i svojih mana. U Reactu nisam toliko iskusan te bih ga volio još puno detaljnije naučiti i sve mogućnosti koje on nudi.  Mislim da se jako dobro snalazim u JavaScript-u, TypeScript-u, HTML-u, CSS-u te sam također naučio koristiti GraphQl za dohvaćanje podataka sa endpointa. Također se solidno snalazim u backendu te znam kreirati SQL I NoSQL baze u PostgreSQL, MySQL, MongoDB. Uz kreiranje baza naučio sam razvijati API-je koje sam većinom radio u Express-u, a nedavno sam istraživao i razvoj u .NET-u. ",
        },
        img: {
          src: profilna,
          alt: "Profilna",
        },
        side: false,
      } as TextImgData,
      background: "#363946",
    },
    {
      id: 2,
      type: DataType.TEXT,
      data: {
        text: {
          naslov: "Hobiji",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae purus eget orci consectetur tempor. Integer molestie ex a est imperdiet, quis blandit orci vulputate. Maecenas vel dolor justo. Suspendisse potenti. Nulla eget urna lacus. Aliquam ut fermentum ante. Quisque malesuada a nunc sit amet congue. Donec leo arcu, ornare quis porta quis, gravida sit amet augue. Morbi non urna a massa lobortis posuere in maximus magna. Etiam dictum dictum lectus, quis blandit velit vestibulum sed. Aliquam convallis diam elit, et convallis urna congue ac. Proin non varius nisi. Donec purus velit, molestie quis finibus ut, tristique vitae nisl.",
        },
      } as TextData,
      background: "#363946",
    },
    {
      id: 3,
      type: DataType.TEXTIMG,
      data: {
        text: {
          naslov: "Zanimljivosti",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae purus eget orci consectetur tempor. Integer molestie ex a est imperdiet, quis blandit orci vulputate. Maecenas vel dolor justo. Suspendisse potenti. Nulla eget urna lacus. Aliquam ut fermentum ante. Quisque malesuada a nunc sit amet congue. Donec leo arcu, ornare quis porta quis, gravida sit amet augue. Morbi non urna a massa lobortis posuere in maximus magna. Etiam dictum dictum lectus, quis blandit velit vestibulum sed. Aliquam convallis diam elit, et convallis urna congue ac. Proin non varius nisi. Donec purus velit, molestie quis finibus ut, tristique vitae nisl.",
        },
        img: {
          src: profilna,
          alt: "Profilna",
        },
        side: true,
      } as TextImgData,
      background: "#363946",
    },
    {
      id: 4,
      type: DataType.IMG,
      data: {
        naslov: "Tech stack",
        imgs: [
          {
            src: reactLogo,
            alt: "ReactJS",
          },
          {
            src: angularLogo,
            alt: "AngularJS",
          },
          {
            src: nodeLogo,
            alt: "NodeJS",
          },
          {
            src: gqlLogo,
            alt: "GraphQL",
          },
        ],
      } as ImgData,
      background: "#363946",
    },
  ];
  const [useData, setData] = useState<Data[]>(allData);
  const changeData = (data: Data[]): void => {
    setData(data);
    console.log(useData);
  };
  return <MainPage data={useData} onDataChange={changeData} />;
};

export default App;
