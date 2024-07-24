import { CropData } from '../services/dataService';

export const analyzeCropData = (data: CropData[]) => {
  const yearlyData = new Map<string, { max: string; min: string }>();
  const cropData = new Map<string, { yieldSum: number; areaSum: number; count: number }>();

  data.forEach(({ year, cropName, cropProduction, yieldOfCrops, areaUnderCultivation }) => {
    if (!yearlyData.has(year)) {
      yearlyData.set(year, { max: cropName, min: cropName });
    }
    const yearEntry = yearlyData.get(year)!;
    const maxProduction = data.find(d => d.cropName === yearEntry.max && d.year === year)?.cropProduction || 0;
    const minProduction = data.find(d => d.cropName === yearEntry.min && d.year === year)?.cropProduction || 0;
    if (cropProduction > maxProduction) {
      yearEntry.max = cropName;
    }
    if (cropProduction < minProduction) {
      yearEntry.min = cropName;
    }

    if (!cropData.has(cropName)) {
      cropData.set(cropName, { yieldSum: 0, areaSum: 0, count: 0 });
    }
    const cropEntry = cropData.get(cropName)!;
    cropEntry.yieldSum += yieldOfCrops;
    cropEntry.areaSum += areaUnderCultivation;
    cropEntry.count += 1;
  });

  const yearlyTable = Array.from(yearlyData.entries()).map(([year, { max, min }]) => ({ year, max, min }));
  const cropTable = Array.from(cropData.entries()).map(([cropName, { yieldSum, areaSum, count }]) => ({
    crop: cropName,
    avgYield: count ? (yieldSum / count).toFixed(3) : '0.000',
    avgArea: count ? (areaSum / count).toFixed(3) : '0.000',
  }));

  return { yearlyTable, cropTable };
};
