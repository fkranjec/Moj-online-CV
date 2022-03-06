import React from "react";
import { ImgData } from "../App";
import "./ImageSection.css";

interface ImageSectionProps {
  data: ImgData;
  background: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({ data, background }) => {
  return (
    <React.Fragment>
      <div className="sekcijaSl" style={{ backgroundColor: background }}>
        <div className="sekcija_slike">
          <h1>{data.naslov}</h1>
          <hr className="slika_hr"></hr>
          <div className="lista_slika">
            {data.imgs.map((img, idx) => (
              <img
                className="slika"
                src={img.src}
                alt={img.alt}
                key={idx}
              ></img>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImageSection;
