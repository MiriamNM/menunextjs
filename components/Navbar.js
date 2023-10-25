"use client";
import React, { useState } from "react";
import { Tabs, Tab, Box, Divider } from "@mui/material";

const Navbar = ({
  currentValue,
  setCurrentValue,
  selectedTab,
  setSelectedTab,
}) => {
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
  ]);

  const onChangedBorderRadius = ({ state, i }) => {
    if (state === currentValue) {
      return "25px 25px 0px 0px";
    }
    if (i === 0 && state !== currentValue) return "25px 0px 0px 0px";
    if (i === itemTable.length - 1 && state !== currentValue)
      return "0px 25px 0px 0px";
    if (state !== currentValue) return "0px 0px 0px 0px";
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
    };
  };

  return (
    <Tabs
      sx={{
        paddingLeft: 2,
        paddingRight: 2,
        width: "100%",
        height: "100%",
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
        <>
          <Tab
            key={index}
            label={label}
            onClick={() => setCurrentValue(state)}
            checked={currentValue === state}
            disableRipple
            sx={[
              {
                width: "100%",
                height: "100%",
                backgroundColor: "#BFCFCB !important",
                color: "#709388 !important",
                borderRadius: onChangedBorderRadius({ state, i }),
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                zIndex: 3,
                top: "1rem",
                opacity: 1,
                border: "none",
              },
              currentValue === state && focusTab(state),
              currentValue === "home" && {
                "&:focus": focusTab(state),
              },
            ]}
          />
          {i === 0 && i === itemTable.length - 1 && <Box key={i} sx={{borderLeft: '1px solid #709388 !important', height: "10px"}}></Box>}
        </>
      ))}
    </Tabs>
  );
};

export default Navbar;
