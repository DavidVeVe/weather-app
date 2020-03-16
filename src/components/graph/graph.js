import React from "react";
import {
  SparklinesBars,
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";

import "./graph.scss";

const Graph = props => {
  return (
    <div style={{ marginBottom: ".5rem" }}>
      <Sparklines
        data={props.data}
        width={500}
        limit={40}
        height={40}
        style={{ width: "275px", height: "110px" }}
      >
        <SparklinesBars style={{ fill: "blue", fillOpacity: ".25" }} />
        <SparklinesLine
          color="#ffffff"
          style={{ strokeWidth: 0.5, opacity: ".5" }}
        />
        <SparklinesReferenceLine />
      </Sparklines>
      {props.data && <p className="graph__name">{props.name}</p>}
    </div>
  );
};

export default Graph;
