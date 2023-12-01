const hardwareData = {
  "cpu": [
    {
      "name": "Intel Core i9-11900K",
      "socket": "LGA1200",
      "cores": 8,
      "threads": 16,
      "baseClock": "3.50 GHz",
      "maxTurboClock": "5.30 GHz"
    },
    {
      "name": "AMD Ryzen 9 5900X",
      "socket": "AM4",
      "cores": 12,
      "threads": 24,
      "baseClock": "3.70 GHz",
      "maxTurboClock": "4.80 GHz"
    }
  ],
  "cpuCooler": [
    {
      "name": "Corsair H100i RGB Platinum SE",
      "type": "Liquid Cooler",
      "fanSpeed": "2400 RPM",
      "noiseLevel": "25.0 dBA",
      "compatibility": ["LGA1200", "AM4"],
      "height": "30 mm"
    },
    {
      "name": "Noctua NH-U12S",
      "type": "Air Cooler",
      "fanSpeed": "300 - 1500 RPM",
      "noiseLevel": "22.4 dBA",
      "compatibility": ["LGA1200", "AM4"],
      "height": "158 mm"
    }
  ],
  "gpu": [
    {
      "name": "NVIDIA GeForce RTX 3080",
      "vram": "10 GB GDDR6X",
      "coreClock": "1440 MHz",
      "boostClock": "1710 MHz",
      "cudaCores": 8704,
      "length": "285 mm",
      "powerWattage": 320
    },
    {
      "name": "AMD Radeon RX 6800 XT",
      "vram": "16 GB GDDR6",
      "coreClock": "1825 MHz",
      "boostClock": "2250 MHz",
      "streamProcessors": 4608,
      "length": "267 mm",
      "powerWattage": 300
    }
  ],
  "motherboard": [
    {
      "name": "ASUS ROG Strix Z590-E Gaming",
      "socket": "LGA1200",
      "formFactor": "ATX",
      "chipset": "Z590",
      "memorySlots": 4,
      "maxMemory": "128 GB",
      "pciExpressSlots": 3,
      "usbPorts": 10,
      "m2Slots": 2
    },
    {
      "name": "MSI MAG B550 TOMAHAWK",
      "socket": "AM4",
      "formFactor": "ATX",
      "chipset": "B550",
      "memorySlots": 4,
      "maxMemory": "128 GB",
      "pciExpressSlots": 2,
      "usbPorts": 8,
      "m2Slots": 1
    }
  ],
  "case": [
    {
      "name": "NZXT H510i",
      "formFactor": "ATX Mid Tower",
      "maxGPULength": "381 mm",
      "maxCPUCoolerHeight": "165 mm",
      "driveBays": {
        "2.5": 2,
        "3.5": 2
      }
    },
    {
      "name": "Corsair Crystal 570X RGB",
      "formFactor": "ATX Mid Tower",
      "maxGPULength": "370 mm",
      "maxCPUCoolerHeight": "170 mm",
      "driveBays": {
        "2.5": 2,
        "3.5": 2
      }
    }
  ],
  "ram": [
    {
      "name": "Corsair Vengeance LPX",
      "type": "DDR4",
      "capacity": "32 GB (2 x 16GB)",
      "speed": "3200 MHz",
      "casLatency": 16
    },
    {
      "name": "G.Skill Ripjaws V",
      "type": "DDR4",
      "capacity": "16 GB (2 x 8GB)",
      "speed": "3600 MHz",
      "casLatency": 18
    }
  ],
  "powerSupply": [
    {
      "name": "EVGA SuperNOVA 850 G3",
      "wattage": 850,
      "efficiency": "80 Plus Gold",
      "modular": true
    },
    {
      "name": "Corsair RM750x",
      "wattage": 750,
      "efficiency": "80 Plus Gold",
      "modular": true
    }
  ],
  "storage": [
    {
      "name": "Samsung 970 EVO Plus",
      "type": "NVMe SSD",
      "capacity": "1 TB",
      "readSpeed": "3500 MB/s",
      "writeSpeed": "3300 MB/s"
    },
    {
      "name": "Seagate Barracuda",
      "type": "HDD",
      "capacity": "2 TB",
      "rpm": 7200
    }
  ],
  "networking": [
    {
      "name": "Intel Gigabit Ethernet",
      "type": "LAN",
      "speed": "1 Gbps"
    },
    {
      "name": "Wi-Fi 6",
      "type": "Wireless",
      "speed": "AX3000"
    }
  ]
}

export default hardwareData;