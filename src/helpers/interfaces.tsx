export interface AppState {
    neighbourhood: string,
      contractType: string,
      propertyType: string,
      minBedrooms: string,
      maxBedrooms: string,
      minBathrooms: string,
    usdM2MinLimit: number;
    usdM2MaxLimit: number;
  }

  type StringObj = { [key: string]: string };

 

export interface Metrics {
  generalMetrics: StringObj,
  groupedMetrics: StringObj,
}