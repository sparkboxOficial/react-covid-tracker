export default interface ICovidApi {
  confirmed: CovidNumbers;
  recovered: CovidNumbers;
  deaths: CovidNumbers;
  dailySummary: string;
  dailyTimeSeries: DailyTimeSeries;
  image: string;
  source: string;
  countries: string;
  countryDetail: DailyTimeSeries;
  lastUpdate: string;
}

export interface DailyTimeSeries {
  pattern: string;
  example: string;
}

export interface CovidNumbers {
  value: number;
  q: string;
}