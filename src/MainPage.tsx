import React from "react";
import { Data } from "./App";
import DataList from "./DataList";
import Section from "./Section";

interface MainPageProps {
  data: Data[];
  onDataChange: (data: Data[]) => void;
}

const MainPage: React.FC<MainPageProps> = ({ data, onDataChange }) => {
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
      <DataList data={data} dataChange={() => onDataChange(data)} />
    </React.Fragment>
  );
};

export default MainPage;
