import React, { useState } from "react";
import { Data, DataType, ImgData, TextData, TextImgData } from "../App";
import "./DataList.css";

interface DataListProps {
  data: Data[];
  dataChange: (data: Data[]) => void;
}

const DataList: React.FC<DataListProps> = ({ data, dataChange }) => {
  const [useData, setData] = useState<Data[]>(data);

  const moveItemUp = (idxCurr: number) => {
    let newData: Data[] = [...useData];
    if (idxCurr === 0) {
      alert("Prvi je u nizu");
      return;
    }

    let pom: Data = newData[idxCurr - 1];
    newData[idxCurr - 1] = newData[idxCurr];
    newData[idxCurr] = pom;
    notifiyChanges(newData);
  };

  const moveItemDown = (idxCurr: number) => {
    let newData: Data[] = [...useData];
    if (idxCurr === newData.length - 1) {
      alert("Zadnji je u nizu");
      return;
    }

    let pom: Data = newData[idxCurr + 1];
    newData[idxCurr + 1] = newData[idxCurr];
    newData[idxCurr] = pom;
    notifiyChanges(newData);
  };

  const notifiyChanges = (data: Data[]) => {
    setData(data);
    dataChange(data);
  };

  return (
    <React.Fragment>
      <div className="list">
        {useData.map((el, idx) => (
          <p key={el.id}>
            {el.type === DataType.TEXTIMG &&
              (el.data as TextImgData).text.naslov}
            {el.type === DataType.TEXT && (el.data as TextData).text.naslov}
            {el.type === DataType.IMG && (el.data as ImgData).naslov}
            <button onClick={() => moveItemUp(idx)}>UP</button>
            <button onClick={() => moveItemDown(idx)}>DOWN</button>
          </p>
        ))}
      </div>
    </React.Fragment>
  );
};

export default DataList;
