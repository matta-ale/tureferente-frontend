
export const urlMaker = (filters: { propertyType: string, contractType: string, neighbourhood: string, minBedrooms:string, maxBedrooms: string, minBathrooms: string }) => {
    let filtersURL = `?propertyType=${filters.propertyType}&contractType=${filters.contractType}&neighborhood=${filters.neighbourhood}`
    
    if (filters.minBedrooms) filtersURL += `&minBedrooms=${filters.minBedrooms}`
    if (filters.maxBedrooms) filtersURL += `&maxBedrooms=${filters.maxBedrooms}`
    if (filters.minBathrooms) filtersURL += `&minBathrooms=${filters.minBathrooms}`
    
    return filtersURL
};
