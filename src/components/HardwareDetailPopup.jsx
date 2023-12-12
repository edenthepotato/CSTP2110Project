// HardwareDetailPopup.js
import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const HardwareDetailPopup = ({ isOpen, handleClose, hardwareDetails }) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'primary.main', boxShadow: 24, p: 4, color: 'white' }}>
        <Typography variant="h6" gutterBottom>
          {hardwareDetails.name.S}
        </Typography>
        {Object.entries(hardwareDetails).map(([key, value]) => (
          <Typography key={key} variant="body2" gutterBottom>
            {`${key}: ${value.S || value.N}`} {/* Handle string and number values */}
          </Typography>
        ))}
        <Button onClick={handleClose}>Close</Button>
      </Box>
    </Modal>
  );
};

export default HardwareDetailPopup;
