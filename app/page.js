"use client";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";
import Page1 from "@/components/page1";
import DataTable from "@/components/DataTable";

export default function Home() {
  const [currentValue, setCurrentValue] = useState("");

  useEffect(() => {
    if (!currentValue) {
      setCurrentValue("home");
    }
  }, [currentValue, setCurrentValue]);

  return (
    <Box sx={{ backgroundColor: "#EEF2F1 !important", padding: 4 }}>
      <Navbar setCurrentValue={setCurrentValue} currentValue={currentValue} />
      {/* <Box>
        {currentValue === "home" && <DataTable currentValue={currentValue} />}
        {currentValue === "page1" && <DataTable currentValue={currentValue} />}
        {currentValue === "page2" && <DataTable currentValue={currentValue} />}
      </Box> */}
    </Box>
  );
}
