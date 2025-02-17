"use client";
import Graph, { CustomFilterProps } from "./components/Graph";

const dataSet = [
  { label: "20", value: 20 },
  { label: "30", value: 30 },
  { label: "40", value: 40 },
  { label: "50", value: 50 },
  { label: "60", value: 60 },
];

const CustomFilter = ({ graphFilter, setGraphFilter }: CustomFilterProps) => {
  return (
    <div>
      <div onClick={() => setGraphFilter(20)}>
        {JSON.stringify(graphFilter)}
      </div>
    </div>
  );
};

const DataDisplay = ({ graphFilter }: CustomFilterProps) => {
  return (
    <div>
      {dataSet.map((item) => (
        <div key={item.value}>{item.label}</div>
      ))}
      {JSON.stringify(graphFilter)}
    </div>
  );
};

export default function Home() {
  return (
    <div className="">
      <Graph heading="Pie" filter={CustomFilter} filterInitial={10}>
        {(graphFilter, setGraphFilter) => {
          return (
            <DataDisplay
              graphFilter={graphFilter}
              setGraphFilter={setGraphFilter}
            />
          );
        }}
      </Graph>
      {/* <Graph type={"Bar"} dataDisplay={DataDisplay} /> */}
    </div>
  );
}
