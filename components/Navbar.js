"use client";
import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

const Navbar = ({
  currentValue,
  setCurrentValue,
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

  const onChangedBorderRadius = ({ index }) => {
    // currentValue === "" && "25px 25px 0px 0px";

    if (currentValue === "home") {
      if (index === 2) {
        return "0px 0px 0px 25px";
      }
      if (index === 3) {
        return "0px 25px 0px 0px";
      }
    }

    if (currentValue === "page1") {
      if (index === 1) {
        return "25px 0px 25px 0px";
      }
      if (index === 3) {
        return "0px 25px 0px 25px";
      }
    }

    if (currentValue === "page2") {
      if (index === 1) {
        return "25px 0px 0px 0px";
      }
      if (index === 2) {
        return "0px 0px 25px 0px";
      }
    }

    return "25px 25px 0px 0px";
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
    value={currentValue}
    onChange={(event, newValue) => setCurrentValue(newValue)}
      sx={{
        paddingLeft: 2,
        paddingRight: 2,
        width: "100%",
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
            value={state}
            disableRipple
            sx={[
              {
                width: "100%",
                height: "100%",
                backgroundColor: "#BFCFCB !important",
                color: "#709388 !important",
                borderRadius: onChangedBorderRadius({ index }),
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
          {i === 0 && i === itemTable.length - 1 && (
            <Box
              key={i}
              sx={{
                width: "1px",
                height: "100%",
                backgroundColor: "#709388",
              }}
            ></Box>
          )}
        </>
      ))}
    </Tabs>
  );
};

export default Navbar;
