import DestinationChatbot from "../components/DestinationChatbot";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import destinations from "../data/destinations";
import { getWeather } from "../services/weatherService";

function DestinationDetails() {
  const { id } = useParams();

  const destination = destinations.find(
    (item) => String(item.id) === String(id)
  );

  // =========================
  // WEATHER STATE
  // =========================

  const [weather, setWeather] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [weatherError, setWeatherError] = useState("");

  // =========================
  // FETCH WEATHER
  // =========================

  useEffect(() => {
    if (!destination) return;

    async function fetchWeather() {
      try {
        setWeatherLoading(true);
        setWeatherError("");

        const data = await getWeather(
          destination.latitude,
          destination.longitude
        );

        console.log("WEATHER DATA:", data);

        setWeather(data);
      } catch (error) {
        console.error("WEATHER ERROR:", error);

        setWeatherError(
          "Weather information is currently unavailable."
        );
      } finally {
        setWeatherLoading(false);
      }
    }

    fetchWeather();
  }, [destination]);

  // =========================
  // DESTINATION NOT FOUND
  // =========================

  if (!destination) {
    return (
      <main className="destination-not-found">

        <h1>
          Destination not found
        </h1>

        <p>
          We couldn't find the destination you're looking for.
        </p>

        <Link
          to="/"
          className="back-home-button"
        >
          Back to Explore
        </Link>

      </main>
    );
  }

  return (
    <main className="destination-details">

      {/* =================================================
          HERO IMAGE
      ================================================= */}

      <section className="destination-detail-hero">

        <img
          src={destination.image}
          alt={`${destination.name}, ${destination.country}`}
          onError={(event) => {
            event.currentTarget.src =
              "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=80";
          }}
        />

        <div className="destination-detail-overlay"></div>

        <div className="destination-detail-content">

          <Link
            to="/"
            className="back-button"
          >
            ← Back to Explore
          </Link>

          <div className="destination-title">

            <p>
              {destination.region}
            </p>

            <h1>
              {destination.name}
            </h1>

            <span>
              {destination.country}
            </span>

          </div>

        </div>

      </section>


      {/* =================================================
          DESTINATION INTRO
      ================================================= */}

      <section className="destination-intro">

        <div className="destination-intro-label">
          ABOUT THE DESTINATION
        </div>

        <div className="destination-intro-content">

          <h2>
            Discover{" "}
            <span>
              {destination.name}.
            </span>
          </h2>

          <p>
            {destination.description}
          </p>

        </div>

      </section>


      {/* =================================================
          WEATHER
      ================================================= */}

      <section className="weather-section">

        <div className="weather-heading">

          <p className="section-eyebrow">
            CURRENT CONDITIONS
          </p>

          <h2>
            Weather in{" "}
            <span>
              {destination.name}.
            </span>
          </h2>

        </div>


        {/* -------------------------
            WEATHER LOADING
        ------------------------- */}

        {weatherLoading && (
          <div className="weather-state">

            <div className="weather-spinner"></div>

            <p>
              Loading current weather...
            </p>

          </div>
        )}


        {/* -------------------------
            WEATHER ERROR
        ------------------------- */}

        {!weatherLoading && weatherError && (
          <div className="weather-state weather-error">

            <p>
              {weatherError}
            </p>

          </div>
        )}


        {/* -------------------------
            WEATHER DATA
        ------------------------- */}

        {!weatherLoading &&
          !weatherError &&
          weather && (

            <div className="weather-card">

              {/* Temperature */}

              <div className="weather-main">

                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={
                    weather.weather[0].description
                  }
                  className="weather-icon"
                />

                <div>

                  <strong>
                    {Math.round(
                      weather.main.temp
                    )}°C
                  </strong>

                  <p>
                    {weather.weather[0].description}
                  </p>

                </div>

              </div>


              {/* Location */}

              <div className="weather-location">

                <h3>
                  {weather.name}
                </h3>

                <p>
                  {destination.country}
                </p>

              </div>


              {/* Weather Details */}

              <div className="weather-details">

                <div>

                  <span>
                    Feels like
                  </span>

                  <strong>
                    {Math.round(
                      weather.main.feels_like
                    )}°C
                  </strong>

                </div>


                <div>

                  <span>
                    Humidity
                  </span>

                  <strong>
                    {weather.main.humidity}%
                  </strong>

                </div>


                <div>

                  <span>
                    Wind
                  </span>

                  <strong>
                    {Math.round(
                      weather.wind.speed * 3.6
                    )} km/h
                  </strong>

                </div>

              </div>

            </div>

          )}

      </section>


      {/* =================================================
          FAMOUS PLACES
      ================================================= */}

      <section className="famous-places">

        <div className="famous-places-heading">

          <div>

            <p className="section-eyebrow">
              MUST-SEE PLACES
            </p>

            <h2>
              Famous places
              <br />
              <span>
                to explore.
              </span>
            </h2>

          </div>

          <p>
            Explore some of the most memorable
            places to visit in{" "}
            {destination.name}.
          </p>

        </div>


        {/* Famous Places Grid */}

        <div className="famous-places-grid">

          {destination.famousPlaces.map(
            (place, index) => (

              <article
                className="famous-place-card"
                key={place.name}
              >

                {/* Image */}

                <div className="famous-place-image-wrapper">

                  <img
                    src={place.image}
                    alt={place.name}
                    className="famous-place-image"
                    onError={(event) => {
                      event.currentTarget.src =
                        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80";
                    }}
                  />

                  <span className="place-number">
                    0{index + 1}
                  </span>

                </div>


                {/* Content */}

                <div className="famous-place-content">

                  <h3>
                    {place.name}
                  </h3>

                  <p>
                    {place.description}
                  </p>

                </div>

              </article>

            )
          )}

        </div>

      </section>


      {/* =================================================
          AI DESTINATION CHATBOT
      ================================================= */}

      <DestinationChatbot
        destination={destination}
      />


      {/* =================================================
          BACK TO EXPLORE CTA
      ================================================= */}

      <section className="destination-cta">

        <p>
          READY FOR YOUR NEXT ADVENTURE?
        </p>

        <h2>
          Start exploring
          <br />
          <span>
            the world.
          </span>
        </h2>

        <Link
          to="/"
          className="cta-button"
        >
          Explore destinations
          <span>
            ↗
          </span>
        </Link>

      </section>

    </main>
  );
}

export default DestinationDetails;