"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [currentValue, setCurrentValue] = useState(0);
  const [itemTable, setItemTable] = useState([
    {
      label: "inicio",
    },
    {
      label: "Página 1",
    },
    {
      label: "Página 2",
    },
    {
      label: "Página 3",
    },
    {
      label: "Página 4",
    },
  ]);

  useEffect(() => {
    if (!currentValue) {
      setCurrentValue(0);
    }
  }, [currentValue, setCurrentValue]);

  return (
    <Box sx={{ backgroundColor: "#EEF2F1", padding: 4, fontFamily: "Poppins" }}>
      <Navbar
        setCurrentValue={setCurrentValue}
        currentValue={currentValue}
        itemTable={itemTable}
        setItemTable={setItemTable}
      />
      <Typography>Texto</Typography>
    </Box>
  );
}
