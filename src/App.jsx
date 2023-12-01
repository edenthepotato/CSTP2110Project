import { useState } from 'react';
import './App.css';
import hardwareData from './hardware';
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from '@mui/material';

const App = () => {
  const [selectedCpu, setSelectedCpu] = useState('');
  const [selectedGpu, setSelectedGpu] = useState('');
  const [compatibilityResult, setCompatibilityResult] = useState('');

  const handleCheckCompatibility = () => {
    const cpu = hardwareData.cpu.find((c) => c.name === selectedCpu);
    const gpu = hardwareData.gpu.find((g) => g.name === selectedGpu);
  
    if (cpu && gpu) {
      if ((cpu.socket === 'LGA1200' || cpu.socket === 'AM4') && (gpu.length === '285 mm' || gpu.name === 'NVIDIA GeForce RTX 3080')) {
        setCompatibilityResult('Compatible!');
      } else {
        setCompatibilityResult('Not Compatible!');
      }
    }
  };
  

  return (
    <Container>
      <Typography variant="h4" component="div" mt={3}>
        PC Hardware Compatibility Checker
      </Typography>
      <FormControl
        fullWidth
        variant="outlined"
        sx={{ mt: 2, backgroundColor: 'white' }} // Set background color to white
      >
        <InputLabel id="cpu-select-label">Select CPU</InputLabel>
        <Select
          label="Select CPU"
          labelId="cpu-select-label"
          id="cpu-select"
          value={selectedCpu}
          onChange={(e) => setSelectedCpu(e.target.value)}
        >
          {hardwareData.cpu.map((cpu) => (
            <MenuItem key={cpu.name} value={cpu.name}>
              {cpu.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
        fullWidth
        variant="outlined"
        sx={{ mt: 2, backgroundColor: 'white' }} // Set background color to white
      >
        <InputLabel id="gpu-select-label">Select GPU</InputLabel>
        <Select
          label="Select GPU"
          labelId="gpu-select-label"
          id="gpu-select"
          value={selectedGpu}
          onChange={(e) => setSelectedGpu(e.target.value)}
        >
          {hardwareData.gpu.map((gpu) => (
            <MenuItem key={gpu.name} value={gpu.name}>
              {gpu.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCheckCompatibility}
        sx={{ mt: 2 }}
      >
        Check Compatibility
      </Button>
      {compatibilityResult && (
        <Box mt={2}>
          <Typography variant="h6">{compatibilityResult}</Typography>
        </Box>
      )}
    </Container>
  );
};

export default App;
