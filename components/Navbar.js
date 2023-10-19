"use client";
import React from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Tabs>
        <Tab label="Inicio" href="/" />
        <Tab label="Página 1" href="/pagina1" />
        <Tab label="Página 2" href="/pagina2" />
      </Tabs>
    </AppBar>
  );
};

export default Navbar;
