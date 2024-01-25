import { AppState } from './interfaces';



export const urlMaker = (filters: AppState) => {
    let filtersURL = `?propertyType=${filters.propertyType}&contractType=${filters.contractType}&neighborhood=${filters.neighbourhood}`
    
    if (filters.minBedrooms) filtersURL += `&minBedrooms=${filters.minBedrooms}`
    if (filters.maxBedrooms) filtersURL += `&maxBedrooms=${filters.maxBedrooms}`
    if (filters.minBathrooms) filtersURL += `&minBathrooms=${filters.minBathrooms}`
    if (filters.usdM2MinLimit) filtersURL += `&usdM2MinLimit=${filters.usdM2MinLimit}`
    if (filters.usdM2MaxLimit) filtersURL += `&usdM2MaxLimit=${filters.usdM2MaxLimit}`
    
    return filtersURL
};
