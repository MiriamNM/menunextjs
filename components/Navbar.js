"use client";
import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

const Navbar = ({ currentValue, setCurrentValue }) => {
  const tableArr = [
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
  ];

  const onChangedBorderRadius = ({ index }) => {
    currentValue === "" && "15px 15px 0px 0px";
    if (currentValue === "home") {
      if (index === 2) {
        return "0px 19px 0px 19px";
      }
    }

    if (currentValue === "page1") {
      if (index === 1) {
        return "25px 0px 19px 0px";
      }
      if (index === 3) {
        return "0px 19px 0px 19px";
      }
    }

    if (currentValue === "page2") {
      if (index === 2) {
        return "19px 0px 19px 0px";
      }
    }

    return "19px 19px 0px 0px";
  };

  return (
    <Tabs
      sx={{
        paddingLeft: 2,
        paddingRight: 2,
        width: "100%",
        height: "100%",
      }}
      variant="fullWidth"
    >
      {tableArr.map(({ label, state, index }) => (
        <Tab
          key={index}
          label={label}
          onClick={() => setCurrentValue(state)}
          sx={{
            width: "100%",
            height: "100%",
            paddingBottom: "5px",
            backgroundColor: "#BFCFCB !important",
            color: "#709388 !important",
            borderRadius: onChangedBorderRadius({ index }),
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            zIndex: 2,
            // position: "absolute",
            top: "0.3rem",
            "&:focus": {
              backgroundColor: "#fff !important",
              color: "#000 !important",
              top: "0",
              overflow: "hidden",
              zIndex: 1,
              marginX: -1,
              // position: "relative",
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default Navbar;
