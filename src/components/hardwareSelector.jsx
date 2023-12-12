import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const HardwareSelector = ({ label, selectedHardware, onChange, hardwareData }) => {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id={`hardware-select-label-${label}`}>{label}</InputLabel>
        <Select
          labelId={`hardware-select-label-${label}`}
          id={`hardware-select-${label}`}
          value={selectedHardware}
          onChange={(e) => onChange(e.target.value)}
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
      </FormControl>
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
