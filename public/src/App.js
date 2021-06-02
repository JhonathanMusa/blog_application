import React from "react";
import { Nav } from "./components/Nav";
import styles from "./components/Nav.module.css"

const App = () => {
  return (
    <div className={styles.gridContainer}>
      <Nav />
    </div>
  );
}

export default App;
