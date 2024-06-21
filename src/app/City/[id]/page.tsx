import Image from "next/image";

import styles from "./City.module.scss";
import { getCityData } from "./actions/getCityData";
import Location from "./components/Location";
import { getCitiesList } from "@/app/actions/getCitiesList/getCitiesList";
import { BACKGROUND } from "@/utils/constants";

export async function generateStaticParams() {
  const cities = await getCitiesList();

  if (!cities) return [];

  return cities.map(city => ({
    id: city.id.toString(),
  }));
}

export default async function City({ params }: { params: { id: string } }) {
  const city = await getCityData(params.id);

  if (!city) {
    return <div className="no-data">No data yet</div>;
  }

  return (
    <div className={styles.city}>
      <div className={styles.city__container}>
        <div className={styles.city__main}>
          <h1>{city.city}</h1>
          <div className={styles.city__image}>
            <Image
              width={1000}
              height={400}
              priority={true}
              src={city.photo ? city.photo : BACKGROUND}
              alt={`Image of ${city.city}`}
            />
          </div>
        </div>
        <section className={styles.city__info}>
          <h3>Information</h3>
          <ul className={styles.city__list}>
            <li className={styles.item}>
              <div className={styles.item__title}>{city.country}aaa</div>
              <div className={styles.item__subtitle}>Country</div>
            </li>
            <li className={styles.item}>
              <div className={styles.item__title}>{city.population}</div>
              <div className={styles.item__subtitle}>Population</div>
            </li>
            <li className={styles.item}>
              <div className={styles.item__title}>{city.countryCode}</div>
              <div className={styles.item__subtitle}>Country code</div>
            </li>
            <li className={styles.item}>
              <div className={styles.item__title}>{city.countryCode}</div>
              <div className={styles.item__subtitle}>Country code</div>
            </li>
            <li className={styles.item}>
              <div className={styles.item__title}>{city.region}</div>
              <div className={styles.item__subtitle}>Region</div>
            </li>
            <li className={styles.item}>
              <div className={styles.item__title}>{city.regionCode}</div>
              <div className={styles.item__subtitle}>Region code</div>
            </li>
            <li className={styles.item}>
              <div className={styles.item__title}>{city.elevationMeters ?? 0}</div>
              <div className={styles.item__subtitle}>Elevation meters</div>
            </li>
            <li className={styles.item}>
              <div className={styles.item__title}>{city.timezone}</div>
              <div className={styles.item__subtitle}>Timezone</div>
            </li>
          </ul>
        </section>
        <section className={styles.city__map}>
          <h3>Map</h3>
          <Location city={city} />
        </section>
      </div>
    </div>
  );
}
