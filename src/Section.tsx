import React from "react";
import { DataType, ImgData, TextData, TextImgData } from "./App";
import "./Section.css";

interface SectionProps {
  data: TextData | TextImgData | ImgData;
  type: DataType;
  background: string;
}

const Section: React.FC<SectionProps> = ({ data, type, background }) => {
  return (
    <React.Fragment>
      {type === DataType.TEXTIMG && (
        <div
          className="sekcija"
          style={{
            backgroundColor: background,
            flexDirection: (data as TextImgData).side ? "row-reverse" : "row",
          }}
        >
          <div className="sekcija_tekst">
            <p>{(data as TextImgData).text}</p>
          </div>
          <div className="sekcija_slika">
            <p>{(data as TextImgData).img}</p>
          </div>
        </div>
      )}
      {type === DataType.TEXT && (
        <div className="sekcija" style={{ backgroundColor: background }}>
          <div className="sekcija_tekst">
            <p>{(data as TextData).text}</p>
          </div>
        </div>
      )}
      {type === DataType.IMG && (
        <div className="sekcijaSl" style={{ backgroundColor: background }}>
          <div className="sekcija_slike">
            {(data as ImgData).imgs.map((img, idx) => (
              <p className="slika" key={idx}>
                {img}
              </p>
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Section;
