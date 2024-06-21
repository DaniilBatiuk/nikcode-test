import { CityCard } from "../CityCard/CityCard";

import styles from "./CitiesList.module.scss";

type CitiesListProp = {
  citiesList: undefined | ICity[];
};

export const CitiesList: React.FC<CitiesListProp> = ({ citiesList }: CitiesListProp) => {
  return (
    <section className={styles.gallery}>
      {citiesList && citiesList.map(city => <CityCard key={city.id} city={city} />)}
    </section>
  );
};
