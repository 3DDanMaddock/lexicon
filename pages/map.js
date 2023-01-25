import React from "react";
import { Box } from "theme-ui";
import config from "../data/config";
import visibleTiles from "../data/visibleTiles";

const Hexigon = ({ id, index }) => {
  return (
    <Box
      sx={{
        width: "14px",
        height: "14px",
        fontSize: "22px",
        lineHeight: "22px",
        // color: "#fff",
        // textShadow: "0px 2px 14px rgba(108, 73, 172, 0.07),  0px 4px 8px rgba(108, 73, 172, 0.2)",
        opacity: !visibleTiles.includes(id) && "0",
        svg: {
          overflow: "visible",
          transform: "rotate(90deg)",
          position: "relative",
          top: "-4px",
          polygon: {
            fill: "#ccc",
          },
        },
      }}
      {...{ id: `hex-${id}` }}
      dataIndex={index}
    >
      <svg version="1.1" width="14" height="14" viewBox="0 0 300 300">
        <polygon className="hex" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
      </svg>
      {/* &#x2B22; */}
    </Box>
  );
};

const Map = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          margin: "40px auto",
          width: "1440px",
          "> div:nth-child(2n)": {
            marginLeft: "7px",
            overflow: "visible",
          },
        }}
      >
        {Array.from(Array(47)).map((e, rowIndex) => {
          return (
            <Box className="map-row" sx={{ display: "flex", flexDirection: "row", gap: "0px", mb: "-1.8px" }}>
              {Array.from(Array(config.rowTotal)).map((a, index) => {
                return <Hexigon index={index} id={rowIndex * config.rowTotal + index} />;
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Map;
