import { Link } from "react-router-dom";

function DestinationCard({ destination }) {
  return (
    <article className="destination-card">
      <div className="destination-image-wrapper">
        <img
          src={destination.image}
          alt={`${destination.name}, ${destination.country}`}
          className="destination-image"
          onError={(event) => {
            event.currentTarget.src =
              "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80";
          }}
        />

        <span className="destination-region">
          {destination.region}
        </span>
      </div>

      <div className="destination-card-content">
        <div>
          <h3>{destination.name}</h3>

          <p className="destination-country">
            {destination.country}
          </p>
        </div>

        <p className="destination-description">
          {destination.description}
        </p>

        <Link
          to={`/destination/${destination.id}`}
          className="destination-link"
        >
          Discover
          <span>↗</span>
        </Link>
      </div>
    </article>
  );
}

export default DestinationCard;