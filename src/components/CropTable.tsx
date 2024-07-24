import React from 'react';
import { Table } from '@mantine/core';

interface CropTableProps {
  data: { crop: string; avgYield: string; avgArea: string }[];
}

const CropTable: React.FC<CropTableProps> = ({ data }) => (
  <Table>
    <thead>
      <tr>
        <th>Crop</th>
        <th>Average Yield (1950-2020)</th>
        <th>Average Cultivation Area (1950-2020)</th>
      </tr>
    </thead>
    <tbody>
      {data.map(({ crop, avgYield, avgArea }) => (
        <tr key={crop}>
          <td>{crop}</td>
          <td>{avgYield}</td>
          <td>{avgArea}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default CropTable;
