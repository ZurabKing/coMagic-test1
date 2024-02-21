import { FC } from "react";
import { YearApp } from "../../components/YearApp";
import styles from "./Home.module.css";

export const Home: FC = () => {
  return (
    <main>
      <section className={styles.year}>
        <YearApp />
      </section>
    </main>
  );
};
