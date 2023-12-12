import { useState, useEffect } from "react";
import "./App.css";
import HardwareSelector from "./components/hardwareSelector";
import { Container, Typography, Button, Box, Grid } from "@mui/material";
import {
  DynamoDBClient,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";

const accessKey = import.meta.env.VITE_APP_ACCESSKEY;
const secretAccessKey = import.meta.env.VITE_APP_SECRET_ACCESSKEY;
const tableName = "PC-Part-Picker";

const dbClient = new DynamoDBClient({
  region: "us-west-2",
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey,
  },
});

const scanTable = async (partType) => {
  const params = {
    TableName: tableName,
    FilterExpression: "PartType = :partType",
    ExpressionAttributeValues: {
      ":partType": { S: partType },
    },
  };

  try {
    const data = await dbClient.send(new ScanCommand(params));
    return data.Items;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const App = () => {
  const [selectedCpu, setSelectedCpu] = useState("");
  const [selectedGpu, setSelectedGpu] = useState("");
  const [selectedCase, setSelectedCase] = useState("");
  const [selectedCooler, setSelectedCooler] = useState("");
  const [selectedMotherboard, setSelectedMotherboard] = useState("");
  const [selectedPowerSupply, setSelectedPowerSupply] = useState("");
  const [selectedRAM, setSelectedRAM] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");

  const [cpuData, setCpuData] = useState([]);
  const [gpuData, setGpuData] = useState([]);
  const [caseData, setCaseData] = useState([]);
  const [coolerData, setCoolerData] = useState([]);
  const [motherboardData, setMotherboardData] = useState([]);
  const [powerSupplyData, setPowerSupplyData] = useState([]);
  const [ramData, setRamData] = useState([]);
  const [storageData, setStorageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setCpuData(await scanTable("CPU"));
      setGpuData(await scanTable("GPU"));
      setCaseData(await scanTable("Case"));
      setCoolerData(await scanTable("Cooler"));
      setMotherboardData(await scanTable("Motherboard"));
      setPowerSupplyData(await scanTable("PowerSupply"));
      setRamData(await scanTable("RAM"));
      setStorageData(await scanTable("Storage"));
    };

    fetchData();
  }, []);

  const [compatibilityResult, setCompatibilityResult] = useState("");
  const [warning, setWarning] = useState("");

  const handleCheckCompatibility = () => {
    const selectedCpuObj = cpuData.find((cpu) => cpu.name.S === selectedCpu);
    const selectedGpuObj = gpuData.find((gpu) => gpu.name.S === selectedGpu);
    const selectedRamObj = ramData.find((ram) => ram.capacity.S === selectedRAM);
    

    if (selectedCpuObj && selectedGpuObj && selectedRamObj) {
      const cpuSocket = selectedCpuObj.socket.S;
      const gpuName = selectedGpuObj.name.S;
      const ramCapacity = selectedRamObj.capacity.S;    
      if (
        (cpuSocket === "LGA1200" || cpuSocket === "AM4") &&
        (gpuName === "AMD Radeon RX 6800 XT" || gpuName === "NVIDIA GeForce RTX 3080") &&
        (ramCapacity === "32 GB (2 x 16GB)" || ramCapacity === "16 GB (2 x 8GB)")
      ) {
        setCompatibilityResult("Compatible!");
        setWarning("");
      } else {
        setCompatibilityResult("Not Compatible!");
        setWarning("");
      }
    } else {
      setCompatibilityResult("");
      setWarning("Please select all hardware components.");
    }

  };

  return (
    <Container sx={{ backgroundColor: "#66ff66", padding: "20px", borderRadius: "8px" }}>
      <Typography variant="h4" fontWeight="bold" component="div" mt={3}>
        PC Hardware Compatibility Checker
      </Typography>

      <HardwareSelector
        label="CPU"
        selectedHardware={selectedCpu}
        onChange={setSelectedCpu}
        hardwareData={cpuData}
      />

      <HardwareSelector
        label="GPU"
        selectedHardware={selectedGpu}
        onChange={setSelectedGpu}
        hardwareData={gpuData}
      />

      <HardwareSelector
        label="Motherboard"
        selectedHardware={selectedMotherboard}
        onChange={setSelectedMotherboard}
        hardwareData={motherboardData}
      />

      <HardwareSelector
        label="Case"
        selectedHardware={selectedCase}
        onChange={setSelectedCase}
        hardwareData={caseData}
      />

      <HardwareSelector
        label="Cooler"
        selectedHardware={selectedCooler}
        onChange={setSelectedCooler}
        hardwareData={coolerData}
      />

      <HardwareSelector
        label="RAM"
        selectedHardware={selectedRAM}
        onChange={setSelectedRAM}
        hardwareData={ramData}
      />

      <HardwareSelector
        label="Storage"
        selectedHardware={selectedStorage}
        onChange={setSelectedStorage}
        hardwareData={storageData}
      />

      <HardwareSelector
        label="Power Supply"
        selectedHardware={selectedPowerSupply}
        onChange={setSelectedPowerSupply}
        hardwareData={powerSupplyData}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleCheckCompatibility}
        sx={{ mt: 2 }}
      >
        Check Compatibility
      </Button>

      {warning && (
        <Box mt={2}>
          <Typography variant="h6" color="error">
            {warning}
          </Typography>
        </Box>
      )}

      {compatibilityResult && (
        <Box mt={2}>
          <Typography variant="h6">{compatibilityResult}</Typography>
        </Box>
      )}
    </Container>
  );
};

export default App;
