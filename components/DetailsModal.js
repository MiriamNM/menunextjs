"use client";
import React from 'react';
import { Box, Modal } from '@mui/material';

const DetailModal = ({ isOpen, handleClose }) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box>
        {/* Contenido del Modal */}
        <button onClick={handleClose}>Cerrar</button>
      </Box>
    </Modal>
  );
};

export default DetailModal;
