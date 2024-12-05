import React from "react";
import { useState } from "react";
import RoomSearch from "../common/RoomSearch";
import RoomResult from "../common/RoomResult";

const HomePage = () => {
  const [roomSearchResults, setRoomSearchResults] = useState([]);

  // Function of search results
  const handleSearchResult = (results) => {
    setRoomSearchResults(results);
  };

  return (
    <div className="home">
      {/* HEADER & BANNER ROOM SECTION */}
      <section>
        <header className="header-banner">
          <img
            src="src/assets/hotel.webp"
            alt="Star Hotel"
            className="header-image"
          />
          <div className="overlay"></div>
          <div className="animated-texts overlay-content">
            <h1>
              Welcome to <span className="phegon-color">Star Hotel</span>
            </h1>
            <br />
            <h3>Steps into the haven of comfort and care</h3>
          </div>
        </header>
      </section>

      {/* SEARCH AVAILABLE ROOM SECTION */}
      <RoomSearch handleSearchResult={handleSearchResult} />
      <RoomResult roomSearchResults={roomSearchResults} />

      <h4>
        <a className="view-rooms-home" href="/rooms">
          All Rooms
        </a>
      </h4>

      <h2 className="home-services">
        Services at <span className="phegon-color">Star Hotel</span>
      </h2>

      {/* SERVICES SECTION */}
      <section className="service-section">
        <div className="service-card">
          <img src="src/assets/ac.png" alt="Air Conditioning" />
          <div className="service-details">
            <h3 className="service-title">Air Conditioning</h3>
            <p className="service-description">
              Stay cool and comfortable throughout your stay with our
              individually controlled in-room air conditioning.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img src="src/assets/mini-bar.png" alt="Mini Bar" />
          <div className="service-details">
            <h3 className="service-title">Mini Bar</h3>
            <p className="service-description">
              Enjoy a convenient selection of beverages and snacks stocked in
              your room's mini bar with no additional cost.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img src="src/assets/parking.png" alt="Parking" />
          <div className="service-details">
            <h3 className="service-title">Parking</h3>
            <p className="service-description">
              We offer on-site parking for your convenience . Please inquire
              about valet parking options if available.
            </p>
          </div>
        </div>
        <div className="service-card">
          <img src="src/assets/wifi.png" alt="WiFi" />
          <div className="service-details">
            <h3 className="service-title">WiFi</h3>
            <p className="service-description">
              Stay connected throughout your stay with complimentary high-speed
              Wi-Fi access available in all guest rooms and public areas.
            </p>
          </div>
        </div>
      </section>
      {/* AVAILABLE ROOMS SECTION */}
      <section></section>
    </div>
  );
};

export default HomePage;
