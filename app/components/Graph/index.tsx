import { Dispatch, JSX, SetStateAction, useState } from "react";

export interface CustomFilterProps {
  graphFilter?: number | string | object;
  setGraphFilter: Dispatch<SetStateAction<number | string | object>>;
}

interface GraphProps {
  heading?: string;
  filter?: ({ graphFilter, setGraphFilter }: CustomFilterProps) => JSX.Element;
  filterInitial?: number | string | object;
  children: (
    graphFilter: CustomFilterProps["graphFilter"],
    setGraphFilter: CustomFilterProps["setGraphFilter"]
  ) => JSX.Element;
}

const Graph = ({
  filterInitial,
  heading,
  filter: Filter,
  children,
}: GraphProps) => {
  const [graphFilter, setGraphFilter] = useState(filterInitial);

  return (
    <div className="bg-gray-400 m-7 p-7">
      <div className="flex justify-between bg-zinc-400 text-black">
        {heading}
        {Filter && (
          <Filter graphFilter={graphFilter} setGraphFilter={setGraphFilter} />
        )}
      </div>
      {children(graphFilter, setGraphFilter)}
    </div>
  );
};

export default Graph;
