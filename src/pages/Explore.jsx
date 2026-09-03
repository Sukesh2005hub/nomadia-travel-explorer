import { useState } from "react";
import destinations from "../data/destinations";
import DestinationCard from "../components/DestinationCard";

function Explore() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const regions = [
    "All",
    ...new Set(
      destinations.map((destination) => destination.region)
    ),
  ];

  const filteredDestinations = destinations.filter(
    (destination) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        destination.name.toLowerCase().includes(search) ||
        destination.country.toLowerCase().includes(search);

      const matchesRegion =
        selectedRegion === "All" ||
        destination.region === selectedRegion;

      return matchesSearch && matchesRegion;
    }
  );

  return (
    <section className="explore-section" id="explore">
      
      {/* SECTION HEADING */}
      <div className="section-heading">
        <div>
          <p className="section-eyebrow">
            DISCOVER THE WORLD
          </p>

          <h2>
            Places worth
            <br />
            <span>exploring.</span>
          </h2>
        </div>

        <p className="section-description">
          From iconic cities to peaceful escapes,
          find a destination that feels like yours.
        </p>
      </div>

      {/* SEARCH + FILTERS */}
      <div className="explore-controls">

        <div className="destination-search">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search destinations..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />
        </div>

        <div className="region-filters">
          {regions.map((region) => (
            <button
              key={region}
              className={
                selectedRegion === region
                  ? "region-button active"
                  : "region-button"
              }
              onClick={() =>
                setSelectedRegion(region)
              }
            >
              {region}
            </button>
          ))}
        </div>

      </div>

      {/* DESTINATION CARDS */}
      {filteredDestinations.length > 0 ? (

        <div className="destination-grid">

          {filteredDestinations.map(
            (destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            )
          )}

        </div>

      ) : (

        <div className="empty-state">

          <h3>No destinations found</h3>

          <p>
            Try another destination or choose
            a different region.
          </p>

        </div>

      )}

    </section>
  );
}

export default Explore;