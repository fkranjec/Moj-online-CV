import React from "react";
import { TextImgData } from "../App";
import "./TextImageSection.css";

interface TextImageSectionProps {
  data: TextImgData;
  background: string;
}

const TextImageSection: React.FC<TextImageSectionProps> = ({
  data,
  background,
}) => {
  return (
    <React.Fragment>
      <div
        className="sekcija"
        style={{
          backgroundColor: background,
          flexDirection: data.side ? "row-reverse" : "row",
        }}
      >
        <div className="sekcija_tekst">
          <h1>{data.text.naslov}</h1>
          <hr></hr>
          <p>{data.text.text}</p>
        </div>
        <div className="sekcija_slika">
          <img src={data.img.src} alt={data.img.alt}></img>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TextImageSection;
