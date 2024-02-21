import { FC } from "react";
import { Link } from "react-router-dom";
import { Route } from "../../constants/routes";
import styles from "./Header.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to={Route.Home}>Logo</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link className={styles.link} to={Route.Home}>
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={Route.Auth}>
              Log in
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
