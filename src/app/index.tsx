import { FC } from "react";

import Routing from "../pages";

import styles from "./index.module.scss";

const App: FC = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <Routing />
    </div>
  );
};

export default App;
