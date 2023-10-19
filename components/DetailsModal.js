"use client";
import React from 'react';
import { Modal } from '@mui/material';

const DetailModal = ({ isOpen, handleClose }) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <div>
        {/* Contenido del Modal */}
        <button onClick={handleClose}>Cerrar</button>
      </div>
    </Modal>
  );
};

export default DetailModal;
