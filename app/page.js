"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/Navbar";
import Page1 from "@/components/page1";
import DataTable from "@/components/DataTable";

export default function Home() {
  const [currentValue, setCurrentValue] = useState("");

  return (
    <Box sx={{ backgroundColor: "#EEF2F1" }}>
      <Box sx={{ background: "#EFF3F2", padding: 4, border: "none",  }}>
        <Navbar setCurrentValue={setCurrentValue} currentValue={currentValue} />
        <Box>
          {currentValue === "home" && <DataTable />}
          {currentValue === "page1" && <Page1 />}
          {currentValue === "page2" && <p className="bg-white">Hola PAGE2</p>}
        </Box>
      </Box>
    </Box>
  );
}
