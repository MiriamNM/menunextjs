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
        return "0px 25px 0px 25px";
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
      if (index === 2) {
        return "25px 0px 25px 0px";
      }
    }

    return "25px 25px 0px 0px";
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
          // boxShadow: 1,
        }}
      ></Tab>
      {tableArr.map(({ label, state, index }) => (
        <Tab
          key={index}
          label={label}
          onClick={() => setCurrentValue(state)}
          checked={currentValue.length > 0}
          sx={[
            {
              width: "100%",
              height: "100%",
              backgroundColor: "#BFCFCB !important",
              color: "#709388 !important",
              borderRadius: onChangedBorderRadius({ index }),
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              zIndex: 3,
              top: "1rem",
              opacity: 1,
              border: "none",
            },
            currentValue === state && {
              "&:focus": {
                backgroundColor: "#fff !important",
                color: "#000 !important",
                zIndex: 2,
                top: "0rem",
                height: "70px",
                overflow: "hidden",
                opacity: 1,
                boxShadow:
                  currentValue === state
                    ? "0px -2px rgba(0, 0, 0, 0.2)" // Agrega una sombra a la pestaña seleccionada
                    : currentValue.length === 0
                    ? "0px 4px rgba(0, 0, 0, 0.2)" // Agrega una sombra a las pestañas en blanco
                    : "none", // Sin sombra para otras pestañas
              },
            },
          ]}
        />
      ))}
    </Tabs>
  );
};

export default Navbar;
