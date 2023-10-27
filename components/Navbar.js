"use client";
import React, { useState } from "react";
import { Tabs, Tab, Box, Divider } from "@mui/material";

const Navbar = ({ currentValue, setCurrentValue }) => {
  const [itemTable, setItemTable] = useState([
    {
      label: "inicio",
      state: "home",
      index: 1,
    },
    {
      label: "Página 1",
      state: "page1",
      index: 2,
    },
    {
      label: "Página 2",
      state: "page2",
      index: 3,
    },
    {
      label: "Página 3",
      state: "page3",
      index: 4,
    },
    {
      label: "Página 4",
      state: "page4",
      index: 5,
    },
  ]);

  const onChangedBorderRadius = (i, arrLength) => {
    let topLeft = "0";
    let topRight= "0";
    let bottomRight = "0"
    let bottomLeft = "0"

    const borderRadius = "25px"

    if (currentValue === i){
      topLeft = borderRadius
      topRight = borderRadius
    } else {
      if(i === currentValue - 1){
        bottomRight = borderRadius
      } else if (i === currentValue + 1){
        bottomLeft = borderRadius
      }
    }
    if(i === 0){
      topLeft = borderRadius
    }
    if(i == arrLength -1){
      topRight = borderRadius
    }
    return  `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`
  };

  const onRenderDivider = (i, itemTableLength) => {
    if (i === currentValue - 1) {
      return;
    }
    if (currentValue === i) {
      return;
    }
    if (i === itemTableLength - 1) {
      return;
    }
    return DividerComponent({ i, currentValue });
  };

  const focusTab = () => {
    return {
      backgroundColor: "#fff !important",
      color: "#000 !important",
      zIndex: 2,
      top: "0rem",
      overflow: "hidden",
      opacity: 1,
      boxShadow: '0px 7px rgba(0, 0, 0, 0.6)',
      height: "90px",
    };
  };

  const DividerComponent = ({ i }) => {
    return (
      <Divider
        orientation="vertical"
        variant="middle"
        sx={[
          {
            backgroundColor: "#709388 !important",
            zIndex: 4,
            width: "2px",
            maxHeight: "30px",
            opacity: 1,
            position: "absolute",
            right: "0px",
          },
          currentValue === i && {
            "&:focus": {
              backgroundColor: "#fff",
            },
          },
        ]}
      />
    );
  };

  return (
    <Tabs
      value={currentValue}
      onChange={(event, newValue) => setCurrentValue(newValue)}
      sx={{
        display: "flex",
      }}
      variant="fullWidth"
    >
      <Tab
        sx={{
          overflow: "hidden",
          width: "100%",
          height: "100%",
          backgroundColor: "#fff !important",
          zIndex: 1,
          position: "absolute",
          top: "40px",
        }}
      ></Tab>
      {itemTable.map(({ label, state }, i) => (
        <Tab
          key={i}
          label={label}
          onClick={() => setCurrentValue(i)}
          value={state}
          disableRipple
          sx={[
            {
              width: "100%",
              backgroundColor: "#BFCFCB !important",
              color: "#709388",
              borderRadius: onChangedBorderRadius(i, itemTable.length),
              zIndex: 3,
              top: "0.78rem",
              opacity: 1,
              border: "none",
            },
            currentValue === i && focusTab(),
          ]}
          icon={onRenderDivider(i, itemTable.length)}
        />
      ))}
    </Tabs>
  );
};

export default Navbar;
