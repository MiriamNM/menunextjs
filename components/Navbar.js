"use client";
import React, { useState } from "react";
import { Tabs, Tab, Box, Divider } from "@mui/material";

const DividerComponent = ({ i, currentValue }) => {
  if(i === currentValue - 1){
    return
  }
  if(  currentValue === i) {
    return
  }
  if(currentValue === 0) {
    return
  }
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

  const onChangedBorderRadius = (i, arrayLenght) => {
    if (currentValue === i) return "25px 25px 0px 0px";
    if (i === 0) return "25px 0px 0px 0px";
    if (i === arrayLenght - 1) return "0px 25px 0px 0px";
    if (i === 1 && i !== arrayLenght - 1) return "0px 0px 0px 0px";
  };

  const onRenderDivider = (i) => {
    return DividerComponent({ i, currentValue });
  };

  const focusTab = (state) => {
    return {
      backgroundColor: "#fff !important",
      color: "#000 !important",
      zIndex: 2,
      top: "0rem",
      height: "70px",
      overflow: "hidden",
      opacity: 1,
      boxShadow:
        currentValue === state
          ? "0px 1px rgba(0, 0, 0, 0.1)"
          : currentValue.length === 0
          ? "0px 1px rgba(0, 0, 0, 0.1)"
          : "none",
      flex: 1,
    };
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
      {itemTable.map(({ label, state, index }, i) => (
        <Tab
          key={index}
          label={label}
          onClick={() => setCurrentValue(i)}
          value={state}
          disableRipple
          sx={[
            {
              width: "100%",
              height: "100%",
              backgroundColor: "#BFCFCB !important",
              color: "#709388",
              borderRadius: onChangedBorderRadius(
                i,
                itemTable.length
              ),
              zIndex: 3,
              top: i === 0 ? "0rem" : "1rem",
              opacity: 1,
              border: "none",
              position: "relative",
            },
            currentValue === i && focusTab(i),
            currentValue === "home" && {
              "&:focus": focusTab(i),
            },
          ]}
          icon={onRenderDivider( i, itemTable.length)}
          // icon={
          //   (currentValue === state || i !== itemTable.length - 1 && divider({ state }))
          // }
          // icon={
          //   (currentValue === state || i !== itemTable.findIndex(item => item.state === currentValue) || i !== itemTable.length - 1) && divider({ state })
          // }
        />
      ))}
    </Tabs>
  );
};

export default Navbar;
