import React from "react";
import MainPage from "./MainPage";
import "./App.css";

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
  text: string;
}

export interface TextImgData extends Data {
  text: string;
  img: string;
  side: boolean;
}

export interface ImgData extends Data {
  imgs: string[];
}

const App = () => {
  let allData: Data[] = [
    {
      id: 1,
      type: DataType.TEXTIMG,
      data: {
        text: "LoremIpsum",
        img: "nesto nesto",
        side: false,
      } as TextImgData,
      background: "green",
    },
    {
      id: 2,
      type: DataType.TEXT,
      data: {
        text: "SAMO TEXT",
      } as TextData,
      background: "red",
    },
    {
      id: 3,
      type: DataType.IMG,
      data: {
        imgs: ["asd", "test", "nesto"],
      } as ImgData,
      background: "blue",
    },
  ];
  const changeData = (data: Data[]): void => {
    console.log(data);
  };
  return <MainPage data={allData} onDataChange={changeData} />;
};

export default App;
