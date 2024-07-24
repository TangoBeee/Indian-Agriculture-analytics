import { rawData } from '../data';

export interface CropData {
	country: string
	year: string
	cropName: string
	cropProduction: number
	yieldOfCrops: number
	areaUnderCultivation: number
}

const parseNumber = (value: any): number => {
	const parsed = parseFloat(value)
	return isNaN(parsed) ? 0 : parsed
}

export const fetchCropData = async (): Promise<CropData[]> => {
	return rawData.map((item) => ({
		country: item["Country"],
		year: item["Year"],
		cropName: item["Crop Name"],
		cropProduction: parseNumber(item["Crop Production (UOM:t(Tonnes))"]),
		yieldOfCrops: parseNumber(
			item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]
		),
		areaUnderCultivation: parseNumber(
			item["Area Under Cultivation (UOM:Ha(Hectares))"]
		),
	}))
}
