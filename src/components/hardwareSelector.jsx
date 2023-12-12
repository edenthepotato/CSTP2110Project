import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import HardwareDetailPopup from './hardwareDetailPopup';

const HardwareSelector = ({ label, selectedHardware, onChange, hardwareData }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedHardwareDetails, setSelectedHardwareDetails] = useState(null);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);

    // Find the selected hardware details from hardwareData
    const selectedDetails = hardwareData.find((hardware) => hardware.name.S === selectedValue);
    setSelectedHardwareDetails(selectedDetails);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id={`hardware-select-label-${label}`}>{label}</InputLabel>
        <Select
          labelId={`hardware-select-label-${label}`}
          id={`hardware-select-${label}`}
          value={selectedHardware}
          onChange={handleSelectChange}
          autoWidth
          label={label}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {hardwareData.map((hardware) => (
            <MenuItem key={hardware.PartID.N} value={hardware.name.S}>
              {hardware.name.S}
            </MenuItem>
          ))}
        </Select>
        <Button onClick={handleOpenPopup}>Show Details</Button>
      </FormControl>
      {selectedHardwareDetails && (
        <HardwareDetailPopup
          isOpen={isPopupOpen}
          handleClose={handleClosePopup}
          hardwareDetails={selectedHardwareDetails}
        />
      )}
    </div>
  );
};

HardwareSelector.propTypes = {
  label: PropTypes.string.isRequired,
  selectedHardware: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  hardwareData: PropTypes.array.isRequired,
};

export default HardwareSelector;
