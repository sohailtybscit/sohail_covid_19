import React from "react";
import IndiaTracker from "../components/IndiaTracker/IndiaTracker";
// import TableComponent from "../components/IndiaTracker/IndiaTrackerTable/TableComponent";
import styles from "../App.module.css";
// import { fetchIndianData } from "../api";

import TablePage from "../components/IndiaTracker/Table/TablePage";

export default class Layout2 extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <IndiaTracker />
        </div>
        <div>
          <TablePage />
        </div>
      </div>
    );
  }
}
