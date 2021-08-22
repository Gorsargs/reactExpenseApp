import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    let totalValueSum = 0;
    console.log(dataPointsValues);
    for (let i = 0; i < dataPointsValues.length; i++) {
        totalValueSum+= dataPointsValues[i];
    };
    console.log(totalValueSum)

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    label={dataPoint.label}
                    maxValue={totalValueSum}
                    value={dataPoint.value}
                />
            ))}
        </div>
    );
};

export default Chart;
