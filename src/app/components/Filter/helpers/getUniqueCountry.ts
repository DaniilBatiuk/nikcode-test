export const getUniqueCountry = (cities: ICity[] | undefined): string[] | undefined => {
  if (!cities) return undefined;

  const countries = cities.map(city => city.country);
  const uniqueCountries = Array.from(new Set(countries));

  return uniqueCountries;
};
