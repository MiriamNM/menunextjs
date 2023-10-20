// components/Table.js
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DetailModal from "./DetailsModal";

const DataTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleHeaderClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Box sx={{ backgroundColor: 'greenBd' }}>
      <TableContainer component={Paper} sx={{ backgroundColor: 'white', padding: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Detalles</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Ejemplo 1</TableCell>
              <TableCell onClick={handleOpenModal}>
                <AddCircleIcon />{" "}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <DetailModal isOpen={isModalOpen} handleClose={handleCloseModal} />
    </Box>
  );
};

export default DataTable;
