import React from 'react';
import { Table } from '@mantine/core';

interface YearlyTableProps {
  data: { year: string; max: string; min: string }[];
}

const YearlyTable: React.FC<YearlyTableProps> = ({ data }) => (
  <Table>
    <thead>
      <tr>
        <th>Year</th>
        <th>Crop with Max Production</th>
        <th>Crop with Min Production</th>
      </tr>
    </thead>
    <tbody>
      {data.map(({ year, max, min }) => (
        <tr key={year}>
          <td>{year}</td>
          <td>{max}</td>
          <td>{min}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default YearlyTable;
