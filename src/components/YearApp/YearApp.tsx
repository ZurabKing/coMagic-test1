import { FC, useEffect, useState } from "react";
import { ButtonColor } from "../ButtonColor";
import styles from "./Year.module.css";

const fetchYear = () => new Promise((res) => setTimeout(res, 800));

export const YearApp: FC = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [isLoading, setIsLoading] = useState(false);

  const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(parseInt(event.target.value));
  };

  const handleUpdateYear = async () => {
    try {
      setIsLoading(true);
      await fetchYear();
    } catch {
    } finally {
      setIsLoading(false);
    }
    setCurrentYear(selectedYear);
  };

  useEffect(() => {
    setSelectedYear(currentYear);
  }, [currentYear]);

  return (
    <div className={styles.year_container}>
      <h1>Текущий год: {currentYear}</h1>

      <div className={styles.select_group}>
        <select value={selectedYear} onChange={handleYearChange}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <ButtonColor
          isLoading={isLoading}
          onClick={handleUpdateYear}
          className={styles.btn}
        >
          Обнови дату!
        </ButtonColor>
      </div>
    </div>
  );
};
