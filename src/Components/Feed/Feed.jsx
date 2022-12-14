import React, { useState } from "react";
import "./feed.css";
import Button from "../Common/Button/Button";
import Card from "./Card/Card";
import data from "../../data";

const Feed = () => {
  const [houses, setHouses] = useState(data);
  const [searchVal, setSearchVal] = useState("");

  let priceRanges = [...new Set(data.map((data) => data.range))];
  priceRanges = priceRanges.sort();

  let houseTypes = [...new Set(data.map((data) => data.type))];

  let locations = [...new Set(data.map((data) => data.location))];

  function handleSearch(e) {
    setSearchVal(e.target.value);
    if (e.target.value === "") setHouses(data);
    else {
      let searchVal = houses.filter((data) =>
        data.title.toLowerCase().startsWith(e.target.value.toLowerCase())
      );
      setHouses(searchVal);
    }
  }

  function handleSelectRange(e) {
    console.log(e.target.value);
    if (e.target.value === "all") {
      setHouses(data);
    } else {
      let filteredData = data.filter((data) => data.range === e.target.value);
      setHouses(filteredData);
      console.log(filteredData);
    }
  }
  function handleSelectType(e) {
    console.log(e.target.value);
    if (e.target.value === "all") {
      setHouses(data);
    } else {
      let filteredData = data.filter((data) => data.type === e.target.value);
      setHouses(filteredData);
      console.log(filteredData);
    }
  }

  function handleDate(e) {
    console.log(e.target.value);
  }

  function handleSelectLocation(e) {
    console.log(e.target.value);
    if (e.target.value === "all") {
      setHouses(data);
    } else {
      let filteredData = data.filter(
        (data) => data.location === e.target.value
      );
      setHouses(filteredData);
      console.log(filteredData);
    }
  }
  return (
    <div className="feed">
      {/* ------------------search section------------------------------ */}
      <section className="search">
        <h2>Search properties to rent</h2>
        <input
          type="search"
          placeholder="Search with SearchBar"
          value={searchVal}
          onChange={handleSearch}
        />
      </section>

      {/* ------------------Filter section------------------------------ */}
      <section className="filter">
        <div className="location">
          <h6>Location</h6>
          <div className="options down">
            <select
              name="location"
              id="location"
              onChange={handleSelectLocation}
            >
              <option value="all">Select Price Range</option>
              {locations.map((data, i) => (
                <option value={data} key={i}>
                  {data}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="when">
          <h6>When</h6>
          <div className="options">
            <input type="date" id="date" name="date" onChange={handleDate} />
          </div>
        </div>
        <div className="price">
          <h6>Price</h6>
          <div className="options down">
            <select name="price" id="price" onChange={handleSelectRange}>
              <option value="all">Select Price Range</option>
              {priceRanges.map((data, i) => (
                <option value={data} key={i}>
                  {data}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="property">
          <h6>Property</h6>
          <div className="options down">
            <select name="price" id="price" onChange={handleSelectType}>
              <option value="all">Select type</option>
              {houseTypes.map((data, i) => (
                <option value={data} key={i}>
                  {data.charAt(0).toUpperCase() + data.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Button text="Search" />
      </section>

      {/* ------------------Feed section------------------------------ */}
      <section className="feed_content">
        {houses.length ? (
          houses.map((data, i) => <Card key={i} data={data} />)
        ) : (
          <h2>nodata found</h2>
        )}
      </section>
    </div>
  );
};

export default Feed;
