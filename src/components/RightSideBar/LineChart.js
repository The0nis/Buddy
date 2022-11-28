import React from "react";
import style from "./rightSideBar.module.css";
import { ResponsiveLine } from "@nivo/line";
import { Line as data } from "./mockData";

const LineChart = () => {
  return (
    <div className={style.chart}>
        <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        xFormat=" ^-0,~"
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        lineWidth={4}
        enablePoints={false}
        pointSize={5}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-19}
        areaOpacity={0.05}
        isInteractive={false}
        enableCrosshair={false}
        legends={[]}
        animate={false}
    />
    </div>
  );
};

export default LineChart;
