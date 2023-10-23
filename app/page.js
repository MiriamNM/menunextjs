"use client";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";
import Page1 from "@/components/page1";
import DataTable from "@/components/DataTable";

export default function Home() {
  const [currentValue, setCurrentValue] = useState("");

  // useEffect(() => {
  //   setCurrentValue("home");
  // }, [])

  return (
    <Box sx={{ backgroundColor: "#EEF2F1" }}>
      <Box sx={{ background: "#EFF3F2", padding: 4, border: "none" }}>
        <Navbar setCurrentValue={setCurrentValue} currentValue={currentValue} />
        <Box>
          {currentValue === "home" && <DataTable currentValue={currentValue} />}
          {currentValue === "page1" && <DataTable currentValue={currentValue} />}
          {currentValue === "page2" && <DataTable currentValue={currentValue} />}
        </Box>
      </Box>
    </Box>
  );
}
