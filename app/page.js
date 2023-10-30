"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography, Tabs, Tab, Divider } from "@mui/material";
const itemTableMock = [
  {
    label: "inicio",
    panel: "Home",
  },
  {
    label: "Página 1",
    panel: "Page1",
  },
  {
    label: "Página 2",
    panel: "Page2",
  },
  {
    label: "Página 3",
    panel: "Page3",
  },
  {
    label: "Página 4",
    panel: "Page4",
  },
];

export default function NavbarComponent({ tabsData }) {
  const [currentValue, setCurrentValue] = useState(0);
    
  const data = tabsData || itemTableMock;

  useEffect(() => {
    if (!currentValue) {
      setCurrentValue(0);
    }
  }, [currentValue, setCurrentValue]);

  const onChangedBorderRadius = (index, arrLength) => {
    let topLeft = "0";
    let topRight = "0";
    let bottomRight = "0";
    let bottomLeft = "0";
    const borderRadius = "25px";

    if (currentValue === index) {
      topLeft = borderRadius;
      topRight = borderRadius;
    } else {
      if (index === currentValue - 1) {
        bottomRight = borderRadius;
      } else if (index === currentValue + 1) {
        bottomLeft = borderRadius;
      }
    }
    if (index === 0) {
      topLeft = borderRadius;
    }
    if (index == arrLength - 1) {
      topRight = borderRadius;
    }
    return `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
  };

  const onRenderDivider = (index, itemTableLength) => {
    if (index === currentValue - 1) {
      return;
    }
    if (currentValue === index) {
      return;
    }
    if (index === itemTableLength - 1) {
      return;
    }
    return DividerComponent({ index, currentValue });
  };

  const focusTab = () => {
    return {
      maxWidth: "none",
      minWidth: "90px",
      minHeight: "50px",
      padding: "13px 16px",
      backgroundColor: "#fff !important",
      color: "#000 !important",
      zIndex: 2,
      top: "0px",
      overflow: "hidden",
      opacity: 1,
      boxShadow: 1,
    };
  };

  const DividerComponent = ({ index }) => {
    return (
      <Divider
        orientation="vertical"
        variant="middle"
        sx={[
          {
            backgroundColor: "#709388 !important",
            zIndex: 4,
            width: "1px",
            maxHeight: "22px",
            opacity: 1,
            position: "absolute",
            right: "0px",
            top: "1px",
          },
          currentValue === index && {
            "&:focus": {
              backgroundColor: "#fff",
            },
          },
        ]}
      />
    );
  };

  return (
    <Box sx={{ backgroundColor: "#EEF2F1", padding: 4, fontFamily: "Poppins" }}>
      <Tabs
        value={currentValue}
        onChange={(event, newValue) => setCurrentValue(newValue)}
        sx={{
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
        { Array.isArray(data) && data.map(({ label }, index) => (
          <Tab
            key={index}
            label={label}
            onClick={() => setCurrentValue(index)}
            value={label}
            disableRipple
            sx={[
              {
                maxWidth: "none",
                minWidth: "90px",
                minHeight: "50px",
                padding: "13px 16px",
                backgroundColor: "#BFCFCB !important",
                color: "#709388 !important",
                borderRadius: onChangedBorderRadius(index, data.length),
                zIndex: 3,
                top: "13px",
                opacity: 1,
              },
              currentValue === index && focusTab(),
            ]}
            icon={onRenderDivider(index, data.length)}
          />
        ))}
      </Tabs>
      <Box sx={{ backgroundColor: "#fff", width: "100%", height: "600px" }}>
        { Array.isArray(data) && data.map(({ panel }, index) => {
          return currentValue === index && <Typography>{panel}</Typography>;
        })}
      </Box>
    </Box>
  );
}
