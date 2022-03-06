import React from "react";
import { DataType, ImgData, TextData, TextImgData } from "./App";
import ImageSection from "./components/ImageSection";
import "./Section.css";
import TextImageSection from "./components/TextImageSection";
import TextSection from "./components/TextSection";

interface SectionProps {
  data: TextData | TextImgData | ImgData;
  type: DataType;
  background: string;
}

const Section: React.FC<SectionProps> = ({ data, type, background }) => {
  return (
    <React.Fragment>
      {type === DataType.TEXTIMG && (
        <TextImageSection data={data as TextImgData} background={background} />
      )}
      {type === DataType.TEXT && (
        <TextSection data={data as TextData} background={background} />
      )}
      {type === DataType.IMG && (
        <ImageSection data={data as ImgData} background={background} />
      )}
    </React.Fragment>
  );
};

export default Section;
