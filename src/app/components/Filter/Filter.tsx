"use client";

import { useDeferredValue, useMemo, useState } from "react";

import { CitiesList } from "../CitiesList/CitiesList";

import styles from "./Filter.module.scss";
import { filterAndSortItems } from "./helpers/filterAndSortItems";
import { getUniqueCities } from "./helpers/getUniqueCities";
import { getUniqueCountry } from "./helpers/getUniqueCountry";
import { getUniqueCountryCode } from "./helpers/getUniqueCountryCode";

type FilterProp = {
  citiesList: undefined | ICity[];
};

export const Filter: React.FC<FilterProp> = ({ citiesList }: FilterProp) => {
  const [search, setSearch] = useState<string>("");
  const [sortByCity, setSortByCity] = useState<string>("All");
  const [sortByPopulation, setSortByPopulation] = useState<number | string>("All");
  const [sortByCountryCode, setSortByCountryCode] = useState<string>("All");
  const [sortByCountry, setSortByCountry] = useState<string>("All");

  const sortedCities = useMemo(
    () =>
      filterAndSortItems(
        search,
        sortByCity,
        sortByPopulation,
        sortByCountryCode,
        sortByCountry,
        citiesList,
      ),
    [search, sortByCity, sortByPopulation, sortByCountryCode, sortByCountry, citiesList],
  );
  const deferredSortedCities = useDeferredValue(sortedCities);

  const cities = getUniqueCities(citiesList);
  const countryCodes = getUniqueCountryCode(citiesList);
  const countries = getUniqueCountry(citiesList);
  const populations = [1000000, 1500000, 2000000, 2500000, 3000000];

  return (
    <>
      <section className={styles.filters}>
        <div className={styles.filters__search}>
          <input
            type="text"
            placeholder="City name..."
            value={search}
            onChange={event => setSearch(event.target.value)}
          />
        </div>
        <select
          name="city"
          value={sortByCity}
          onChange={event => setSortByCity(event.target.value)}
        >
          <option value="All">All</option>
          {cities &&
            cities.map(city => (
              <option value={city} key={city}>
                {city}
              </option>
            ))}
        </select>
        <select
          name="population"
          value={sortByPopulation}
          onChange={event =>
            setSortByPopulation(
              event.target.value === "All" ? event.target.value : +event.target.value,
            )
          }
        >
          <option value="All">All Populations</option>
          {populations.map(population => (
            <option value={population} key={population}>
              {`> ${(population / 1000000).toFixed(1)}`}
            </option>
          ))}
        </select>
        <select
          name="countryCode"
          value={sortByCountryCode}
          onChange={event => setSortByCountryCode(event.target.value)}
        >
          <option value="All">All Country codes</option>
          {countryCodes &&
            countryCodes.map(countryCode => (
              <option value={countryCode} key={countryCode}>
                {countryCode}
              </option>
            ))}
        </select>
        <select
          name="country"
          value={sortByCountry}
          onChange={event => setSortByCountry(event.target.value)}
        >
          <option value="All">All Countries</option>
          {countries &&
            countries.map(country => (
              <option value={country} key={country}>
                {country}
              </option>
            ))}
        </select>
      </section>
      {deferredSortedCities && deferredSortedCities.length ? (
        <CitiesList citiesList={deferredSortedCities} />
      ) : (
        <div className="no-data">No data yet</div>
      )}
    </>
  );
};
