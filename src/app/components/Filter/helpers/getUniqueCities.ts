export const getUniqueCities = (cities: ICity[] | undefined): string[] | undefined => {
  if (!cities) return undefined;

  const cityNames = cities.map(city => city.city);
  const uniqueCityNames = Array.from(new Set(cityNames));

  return uniqueCityNames;
};
