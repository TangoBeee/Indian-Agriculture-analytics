import React, { useEffect, useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { fetchCropData } from './services/dataService';
import { analyzeCropData } from './utils/dataAnalysis';
import YearlyTable from './components/YearlyTable';
import CropTable from './components/CropTable';
import "./App.css"

interface YearlyData {
  year: string;
  max: string;
  min: string;
}

interface CropData {
  crop: string;
  avgYield: string;
  avgArea: string;
}

const App: React.FC = () => {
  const [yearlyTable, setYearlyTable] = useState<YearlyData[]>([]);
  const [cropTable, setCropTable] = useState<CropData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCropData();
      const { yearlyTable, cropTable } = analyzeCropData(data);
      setYearlyTable(yearlyTable);
      setCropTable(cropTable);
    };

    getData();
  }, []);

  return (
    <MantineProvider>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h1>Indian Agriculture Data Analysis</h1>
        <h2>Yearly Crop Production</h2>
        <YearlyTable data={yearlyTable} />
        <h2>Crop Averages (1950-2020)</h2>
        <CropTable data={cropTable} />
      </div>
    </MantineProvider>
  );
};

export default App;
