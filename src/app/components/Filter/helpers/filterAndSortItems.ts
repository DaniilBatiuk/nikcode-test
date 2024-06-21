export const filterAndSortItems = (
  search: string,
  sortByCity: string,
  sortByPopulation: number | string,
  sortByCountryCode: string,
  sortByCountry: string,
  items: ICity[] | undefined,
) => {
  if (!items) return;

  let result = items.filter(item => item.city.toLowerCase().includes(search.toLowerCase()));

  if (sortByCity !== "All") {
    result = result.filter(item => item.city === sortByCity);
  }

  if (typeof sortByPopulation !== "string") {
    result = result.filter(item => item.population > sortByPopulation);
  }

  if (sortByCountryCode !== "All") {
    result = result.filter(item => item.countryCode === sortByCountryCode);
  }

  if (sortByCountry !== "All") {
    result = result.filter(item => item.country === sortByCountry);
  }

  return result;
};
