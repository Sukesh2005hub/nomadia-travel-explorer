import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getCurrentLocation,
  getLocationName,
} from "../services/locationService";

import { getWeather } from "../services/weatherService";

import destinations from "../data/destinations";

function Hero() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const [locationLoading, setLocationLoading] = useState(false);
  const [locationMessage, setLocationMessage] = useState("");
  const [locationWeather, setLocationWeather] = useState(null);

  const [searchMessage, setSearchMessage] = useState("");


  // =========================
  // DESTINATION SEARCH
  // =========================

  function handleSearch() {
    const search = searchTerm.trim().toLowerCase();

    if (!search) {
      setSearchMessage("Please enter a destination.");
      return;
    }

    const destination = destinations.find(
      (item) =>
        item.name.toLowerCase() === search ||
        item.country.toLowerCase() === search
    );

    if (destination) {
      setSearchMessage("");
      navigate(`/destination/${destination.id}`);
    } else {
      setSearchMessage(
        "Destination not found. Try Paris, Tokyo, Bali, Rome or Goa."
      );
    }
  }


  // =========================
  // ENTER KEY SEARCH
  // =========================

  function handleSearchKeyDown(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }


  // =========================
  // CURRENT LOCATION
  // =========================

  async function handleUseLocation() {
    try {
      setLocationLoading(true);
      setLocationMessage("");
      setLocationWeather(null);

      const location = await getCurrentLocation();

      console.log("USER LOCATION:", location);

      const locationData = await getLocationName(
        location.latitude,
        location.longitude
      );

      console.log("LOCATION NAME:", locationData);

      const city =
        locationData.address?.city ||
        locationData.address?.town ||
        locationData.address?.village ||
        locationData.address?.municipality ||
        "Unknown location";

      const country =
        locationData.address?.country ||
        "";

      const weather = await getWeather(
        location.latitude,
        location.longitude
      );

      console.log("LOCATION WEATHER:", weather);

      setLocationWeather({
        city,
        country,
        weather,
      });

    } catch (error) {
      console.error("LOCATION ERROR:", error);

      if (error.code === 1) {
        setLocationMessage(
          "Location permission was denied. You can search manually."
        );
      } else if (error.code === 2) {
        setLocationMessage(
          "Unable to determine your location. Please try again."
        );
      } else if (error.code === 3) {
        setLocationMessage(
          "Location request timed out. Please try again."
        );
      } else {
        setLocationMessage(
          "Unable to detect your location or weather."
        );
      }
    } finally {
      setLocationLoading(false);
    }
  }


  return (
    <section className="hero">

      {/* BACKGROUND VIDEO */}

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/travel-video.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero-overlay"></div>


      {/* HERO CONTENT */}

      <div className="hero-content">

        <p className="hero-eyebrow">
          YOUR NEXT ADVENTURE AWAITS
        </p>

        <h1>
          Go somewhere
          <br />
          <span>worth remembering.</span>
        </h1>

        <p className="hero-description">
          Discover remarkable places, experience new cultures,
          and plan your next journey with a little help from AI.
        </p>


        {/* SEARCH */}

        <div className="hero-search">

          <input
            type="text"
            placeholder="Where do you want to go?"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
              setSearchMessage("");
            }}
            onKeyDown={handleSearchKeyDown}
          />

          <button onClick={handleSearch}>
            Explore
          </button>

        </div>


        {/* SEARCH MESSAGE */}

        {searchMessage && (
          <p className="search-message">
            {searchMessage}
          </p>
        )}


        {/* LOCATION BUTTON */}

        <button
          className="location-button"
          onClick={handleUseLocation}
          disabled={locationLoading}
        >
          {locationLoading
            ? "Detecting location..."
            : "📍 Use my location"}
        </button>


        {/* LOCATION ERROR */}

        {locationMessage && (
          <p className="location-message">
            {locationMessage}
          </p>
        )}


        {/* LOCATION WEATHER */}

        {locationWeather && (
          <div className="location-weather">

            <div className="location-weather-header">

              <div>

                <span className="location-label">
                  YOUR LOCATION
                </span>

                <h3>
                  📍 {locationWeather.city}
                </h3>

                <p>
                  {locationWeather.country}
                </p>

              </div>

              <img
                src={`https://openweathermap.org/img/wn/${locationWeather.weather.weather[0].icon}@2x.png`}
                alt={
                  locationWeather.weather.weather[0].description
                }
              />

            </div>


            <div className="location-weather-temperature">

              <strong>
                {Math.round(
                  locationWeather.weather.main.temp
                )}°C
              </strong>

              <span>
                {locationWeather.weather.weather[0].description}
              </span>

            </div>


            <div className="location-weather-details">

              <div>

                <span>
                  Feels like
                </span>

                <strong>
                  {Math.round(
                    locationWeather.weather.main.feels_like
                  )}°C
                </strong>

              </div>


              <div>

                <span>
                  Humidity
                </span>

                <strong>
                  {locationWeather.weather.main.humidity}%
                </strong>

              </div>


              <div>

                <span>
                  Wind
                </span>

                <strong>
                  {Math.round(
                    locationWeather.weather.wind.speed * 3.6
                  )} km/h
                </strong>

              </div>

            </div>

          </div>
        )}

      </div>


      {/* SCROLL */}

      <div className="hero-scroll">

        <span>
          Scroll to explore
        </span>

        <span className="scroll-arrow">
          ↓
        </span>

      </div>

    </section>
  );
}

export default Hero;