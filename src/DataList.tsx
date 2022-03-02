import React, { useState } from "react";
import { Data, DataType, TextImgData } from "./App";

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
    setData(newData);
    dataChange(newData);
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
    setData(newData);
    dataChange(newData);
  };
  return (
    <React.Fragment>
      {useData.map((el, idx) => (
        <p key={el.id}>
          {el.id}
          <button onClick={() => moveItemUp(idx)}>UP</button>
          <button onClick={() => moveItemDown(idx)}>DOWN</button>
        </p>
      ))}
      <button onClick={() => dataChange(data)}>CLICK</button>
    </React.Fragment>
  );
};

export default DataList;
