import React from "react";
import { Box } from "theme-ui";
import config from "../data/config";
import visibleTiles from "../data/visibleTiles";

console.log(visibleTiles);

const Hexagon = ({ id, index }) => {
  return (
    <Box
      sx={{
        width: "14px",
        height: "15px",
        fontSize: "22px",
        lineHeight: "13px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        opacity: !visibleTiles.includes(id) && "0",
        cursor: "pointer",
        backgroundColor: "#fff",
        clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
        transition: "background-color 0.1s ease-in-out",
        "&:hover": {
          transform: "scale(1.1, 1.1)",
          backgroundColor: "red",
        },
        // svg: {
        //   overflow: "visible",
        //   transform: "rotate(90deg)",
        //   position: "relative",
        //   top: "-4px",
        //   polygon: {
        //   },
        // },
      }}
      {...{ id: `hex-${id}` }}
      data-index={index}
    >
      {/* <svg version="1.1" width="14" height="14" viewBox="0 0 300 300">
        <polygon className="hex" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
      </svg> */}
      {/* &#x2B22; */}
    </Box>
  );
};

console.log(config);

const Map = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          margin: "40px auto",
          "> div:nth-child(2n)": {
            marginLeft: "7px",
            overflow: "visible",
          },
          filter: "drop-shadow(2px 2px 5px rgba(0,0,0,0.2))",
        }}
      >
        {Array.from(Array(config.rows)).map((e, rowIndex) => {
          return (
            <Box key={`row-${rowIndex}`} className={`map-row ${rowIndex}`} sx={{ display: "flex", flexDirection: "row", gap: "2px" }}>
              {Array.from(Array(config.columns)).map((a, index) => {
                return <Hexagon key={`${rowIndex}-${index}`} {...{ index }} id={rowIndex * config.columns + index} />;
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
/// toronto: lat, long [y, x]
/// toronto: 43.67028; -79.38667

/// latitude = equator      (28 = 0)  [+90, -90] min and max values
/// long = prime meridian   (38)  NA [-180, +180] Japan

// console.log((43 / 90) * 36); // lat
// console.log((79 / 180) * 38); // long
// console.log(getIndex(17, 19));

// console.log(43 / 90);

export default Map;

/// fiancier
/*
see the different investments
see other assets that are unclaimed by anyone. show the opportunity of investment 

*/
