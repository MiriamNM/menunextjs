"use client";
import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

const Navbar = ({ setCurrentValue, currentValue }) => {
  return (
    <Box position="static" className="w-full pt-3 pl-3 pr-3 bg-greenBg border-none">
      <Tabs variant="fullWidth">
        <Tab
          label="Inicio"
          className={
            `p-2 rounded-tl-lg rounded-tr-lg bg-green hover:bg-green focus:outline-none focus:bg-white $`
          }
          onClick={() => setCurrentValue('home')}
        />
        <Tab
          label="Página 1"
          id="page1"
          className={
            "p-2 rounded-tl-lg rounded-tr-lg bg-green hover:bg-green focus:outline-none focus:bg-white"
          }
          onClick={() => setCurrentValue('page1')}
        />
        <Tab
          label="Página 2"
          id="page2"
          className={
            "p-2 rounded-tl-lg rounded-tr-lg bg-green hover:bg-green focus:outline-none focus:bg-white"
          }
          onClick={() => setCurrentValue('page2')}
        />
      </Tabs>
    </Box>
  );
};

export default Navbar;
