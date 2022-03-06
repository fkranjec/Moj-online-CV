import React, { useState } from "react";
import { Data } from "./App";
import DataList from "./components/DataList";
import Section from "./Section";
import svg from "./assets/arrD.png";
import "./MainPage.css";

interface MainPageProps {
  data: Data[];
  onDataChange: (data: Data[]) => void;
}

const MainPage: React.FC<MainPageProps> = ({ data, onDataChange }) => {
  const [playground, togglePlayground] = useState<boolean>(false);

  return (
    <React.Fragment>
      {data.map((sekcija, idx) => (
        <Section
          key={idx}
          data={sekcija.data}
          type={sekcija.type}
          background={sekcija.background}
        />
      ))}
      <div onClick={() => togglePlayground(!playground)} className="playground">
        <h1 style={{ color: playground ? "white" : "" }}>
          playground <img src={svg} alt=""></img>
        </h1>
        {playground && <h3>pomaknite cijelu sekciju gore ili dolje</h3>}
      </div>
      {playground && <DataList data={data} dataChange={onDataChange} />}
    </React.Fragment>
  );
};

export default MainPage;
