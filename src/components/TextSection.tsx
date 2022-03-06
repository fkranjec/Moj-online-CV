import React from "react";
import { TextData } from "../App";
import "./TextSection.css";

interface TextSectionProps {
  data: TextData;
  background: string;
}

const TextSection: React.FC<TextSectionProps> = ({ data, background }) => {
  return (
    <React.Fragment>
      <div className="sekcija_text" style={{ backgroundColor: background }}>
        <div className="sekcija_tekst_text">
          <h1>{data.text.naslov}</h1>
          <hr></hr>
          <p>{data.text.text}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TextSection;
