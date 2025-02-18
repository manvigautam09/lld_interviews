import { JSX, useState } from "react";

export type GraphDisplayType = { label: string; value: number };

interface GraphDisplayProps {
  data: GraphDisplayType[];
  children?: (filter: boolean) => JSX.Element;
}

const GraphDisplay = ({ children }: GraphDisplayProps) => {
  const [filter, setFilter] = useState(false);
  return (
    <div>
      <div onClick={() => setFilter(true)}>Sample</div>
      {children && children(filter)}
    </div>
  );
};

export default GraphDisplay;
