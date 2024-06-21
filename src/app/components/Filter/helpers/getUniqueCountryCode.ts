export const getUniqueCountryCode = (cities: ICity[] | undefined): string[] | undefined => {
  if (!cities) return undefined;

  const countryCodes = cities.map(city => city.countryCode);
  const uniqueCountryCodes = Array.from(new Set(countryCodes));

  return uniqueCountryCodes;
};
