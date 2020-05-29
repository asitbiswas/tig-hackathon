import React, { Component } from "react";
import "./App.css";
import TopNav from "./Components/TopNav/TopNav";
import TitleBar from "./Components/TitleBar/TitleBar";
import HomeComponent from "./Components/HomeComponent/HomeComponent";
export class App extends Component {
  state = {
    apiDataArray: [],
    filteredData: [],
    fetched: false,
    displayMode: "Night",
    componentOnDisplay: "Home",
  };
  componentDidMount() {
    const url = "https://api.covid19india.org/zones.json";
    const apiResponse = fetch(url);
    apiResponse.then((response) => {
      const JSON_Data = response.json();
      JSON_Data.then((apiData) => {
        this.setState({ apiDataArray: apiData.zones, fetched: true });
      });
    });
  }
  setComponentOnDisplay = (componentValue) => {
    this.setState({ componentOnDisplay: componentValue });
  };
  handleSearch = (e) => {
    const keyword = e.target.value.trim().toLowerCase();
    let resArr = [];
    if (keyword !== "") {
      resArr = this.state.apiDataArray.filter((districtData) => {
        const district = districtData.district.toLowerCase().trim();
        return district.includes(keyword);
      });
    }
    if (keyword === "") {
      resArr = [];
    }
    this.setState({ filteredData: resArr });
  };
  render() {
    return (
      <div className="TopBar">
        <TitleBar displayMode={this.state.displayMode} />
        <TopNav
          componentOnDisplay={this.state.componentOnDisplay}
          setComponentOnDisplay={this.setComponentOnDisplay}
        />
        {this.state.componentOnDisplay === "Home" && <HomeComponent />}
      </div>
    );
  }
}

export default App;
