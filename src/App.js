import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData, fetchCountriesData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "",
    countryDates: [],
    activeCase: [],
    deaths: [],
    recoveredCases: [],
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    await this.setState({ data: fetchedData, country: country });

    const countryData = await fetchCountriesData(country);

    const dates = Object.keys(countryData.cases);
    const cases = Object.values(countryData.cases);
    const deaths = Object.values(countryData.deaths);
    const recovered = Object.values(countryData.recovered);

    this.setState({
      activeCase: cases,
      deaths: deaths,
      recoveredCases: recovered,
      countryDates: dates,
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <Cards data={this.state.data} />
        <CountryPicker
          handleCountryChange={this.handleCountryChange}
          data={this.state.data}
          country={this.state.country}
        />
        <Chart
          data1={this.state.data}
          countryName={this.state.country}
          dates={this.state.countryDates}
          cases={this.state.activeCase}
          deaths={this.state.deaths}
          recovered={this.state.recoveredCases}
        />
      </div>
    );
  }
}

export default App;
