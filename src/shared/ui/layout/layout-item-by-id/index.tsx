import { FC } from "react";
import { TLayout } from "../../..";

import styles from "./index.module.scss";

export const LayoutItemById: FC<TLayout> = ({ children }): JSX.Element => {
  return <div className={styles.layout}>{children}</div>;
};
