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
} from "@mui/material";
import DetailModal from "./DetailsModal";

const DataTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Detalles</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow onClick={handleOpenModal}>
            <TableCell>Ejemplo 1</TableCell>
            <TableCell>Ver Detalles</TableCell>
          </TableRow>
          {/* Agrega más filas según tus necesidades */}
        </TableBody>
      </Table>
      <DetailModal isOpen={isModalOpen} handleClose={handleCloseModal} />
    </TableContainer>
  );
};

export default DataTable;
