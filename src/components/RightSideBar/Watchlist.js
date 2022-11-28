import React from "react";
import style from "./rightSideBar.module.css";
import { ResponsiveLine } from "@nivo/line";
import { Line as data } from "./mockData";

const Watchlist = (props) => {
  return (
    <div className={style.watchwrapper}>
        <div className={style.watchheader}>
          <div>
            <h4>{props.title}{" "}
            <span className={style.arrow}>
              <img src={props.image} />
            </span></h4>
            <p className={style.price}>${props.price}</p>
            <p className={style.percent}>{props.percent}%</p>
          </div>
        </div>


        <div className={style.chart}>
        <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
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
        enablePoints={false}
        pointSize={5}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableCrosshair={false}
        useMesh={true}
        legends={[]}
    />
    </div>

    </div>
  );
};

export default Watchlist;
