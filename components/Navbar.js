"use client";
import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

const Navbar = ({ setCurrentValue }) => {
  const tableArr = [
    {
      label: "inicio",
      state: "home",
    },
    {
      label: "Página 1",
      state: "page1",
    },
    {
      label: "Página 2",
      state: "page2",
    },
  ];

  return (
    <Box
      position="static"
      variant="fullWidth"
      sx={{
        paddingTop: 2,
        paddingLeft: 2,
        paddingRight: 2,
        BorderAll: false,
      }}
    >
      <Tabs variant="fullWidth">
        {tableArr.map(({ label, state }) => (
          <Box
            sx={{
              display: "flex",
              width: "30%",
              overflow: "hidden",
              borderRadius: '12px 12px 0 0',
            }}
            key={state}
          >
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#BFCFCB",
                borderRadius: '12px 12px 0 0',
                "&:focus, &:hover": {
                  backgroundColor: "#FFFFFF !important",
                },
              }}
            >
              <Tab
                label={label}
                onClick={() => setCurrentValue({ state })}
                sx={{
                  width: "100%",
                  marginX: "40px",
                  padding: 0,
                  "&:focus, &:hover": {
                    backgroundColor: "#FFFFFF !important",
                  },
                }}
                className={"inset-y-2 inset-x-0 focus:inset-y-0"}
              />
              <Box
                sx={{
                  backgroundColor: "#BFCFCB !important",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  marginTop: "32px",
                  marginBottom: "-22px",
                  marginLeft: "-20px",
                  float: "left",
                }}
              ></Box>
              <Box
                sx={{
                  backgroundColor: "#BFCFCB !important",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  marginTop: "32px",
                  marginBottom: "-22px",
                  marginRight: "-20px",
                  float: "right",
                }}
              ></Box>
            </Box>
          </Box>
        ))}
      </Tabs>
    </Box>
  );
};

export default Navbar;
