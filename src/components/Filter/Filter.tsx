import React from "react";

import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={styles.filterWrapper}>
      <div className={styles.filters}>Filters</div>
      <div>Clear Filters</div>
    </div>
  );
};

export default Filter;
