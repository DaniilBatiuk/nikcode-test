import styles from "./Home.module.scss";
import { getCitiesList } from "./actions/getCitiesList/getCitiesList";
import { Filter } from "./components/Filter/Filter";

export default async function Home() {
  const citiesList = await getCitiesList();

  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <div className={styles.home__main}>
          <h1>Cities</h1>
          <p>
            Here is a list of several cities and information about them. To view more information,
            click on the card and you will be redirected to a page with detailed information about
            the selected city.
          </p>
        </div>
        <Filter citiesList={citiesList} />
      </div>
    </div>
  );
}
