import Link from "next/link";

import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/">
          <p>NikCode</p>
        </Link>
      </div>
    </header>
  );
};
