export default interface ICountriesApi {
  countries: Country[];
}

interface Country {
  name: string;
  iso2?: string;
  iso3?: string;
}