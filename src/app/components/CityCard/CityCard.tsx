import Image from "next/image";
import Link from "next/link";

import { ICONS } from "@/utils/config/icons";

import styles from "./CityCard.module.scss";
import { BACKGROUND } from "@/utils/constants";

type CityCardProp = {
  city: ICity;
};

export const CityCard: React.FC<CityCardProp> = ({ city }: CityCardProp) => {
  return (
    <Link href={`City/${city.id}`}>
      <figure className={styles.card}>
        <Image
          width={330}
          height={700}
          priority={true}
          src={city.photo ? city.photo : BACKGROUND}
          alt={`Image of ${city.city}`}
        />

        <figcaption>
          <div className={styles.card__main}>
            <h3 className={styles.card__title}>{city.city}</h3>
            <p className={styles.card__country}>{city.country}</p>
          </div>

          <div className={styles.card__footer}>
            <div>
              <p className={styles.card__countryCode}>{city.countryCode}</p>
              <p className={styles.card__population}>{city.population} people</p>
            </div>
            <div className={styles.card__arrow}> {ICONS.arrowRight()}</div>
          </div>
        </figcaption>
      </figure>
    </Link>
  );
};
