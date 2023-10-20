"use client";
import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

const Navbar = ({ setCurrentValue }) => {
  return (
    <Box
      position="static"
      className="w-full pt-3 pl-3 pr-3 bg-greenBg border-none"
    >
      <Tabs variant="fullWidth">
        <Tab
          label="Inicio"
          className={
            "p-2 rounded-tl-lg rounded-tr-lg bg-green inset-y-2 hover:bg-white hover:inset-y-0 focus:bg-white focus:inset-y-0"
          }
          onClick={() => setCurrentValue("home")}
        />
        {/* <Box className=""> */}
          <Tab
            label="Página 1"
            id="page1"
            className={
              "p-2 rounded-tl-lg rounded-tr-lg bg-green inset-y-2 inset-x-0 hover:bg-white hover:inset-y-0 hover:inset-x-1 focus:bg-white focus:inset-y-0"
            }
            onClick={() => setCurrentValue("page1")}
          />
        {/* </Box> */}
        
        <Tab
          label="Página 2"
          id="page2"
          className={
            "p-2 rounded-tl-lg rounded-tr-lg bg-green inset-y-2 inset-x-0 hover:bg-white hover:inset-y-0 hover:inset-x-1 focus:bg-white focus:inset-y-0"
          }
          onClick={() => setCurrentValue("page2")}
        />
      </Tabs>
    </Box>
  );
};

export default Navbar;
