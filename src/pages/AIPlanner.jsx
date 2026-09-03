import { useState } from "react";
import ReactMarkdown from "react-markdown";

import { askGemini } from "../services/aiService";

function AIPlanner() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(3);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [itinerary, setItinerary] = useState("");

  async function generateItinerary() {
    if (!destination.trim()) {
      setError("Please enter a destination.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setItinerary("");

      const prompt = `
You are an expert travel planner.

Create a ${days}-day travel itinerary for ${destination}.

IMPORTANT:
Return the itinerary using clean Markdown formatting.

Use exactly this structure:

## Day 1

### Morning
- Activity
- Activity

### Afternoon
- Activity
- Activity

### Evening
- Activity
- Activity

Continue the same structure for all ${days} days.

At the end use:

## Travel Tips

- Tip 1
- Tip 2
- Tip 3

Rules:

- Use real and relevant places in ${destination}.
- Keep activities practical for travelers.
- Do not write long paragraphs.
- Use headings and bullet points.
- Do not use tables.
- Do not add an unnecessary introduction or conclusion.
- Make the itinerary realistic for the number of days.
- Avoid repeating the same activity.
`;

      const result = await askGemini(prompt);

      setItinerary(result);
    } catch (error) {
      console.error("AI PLANNER ERROR:", error);

      setError(
        error.message ||
          "Unable to generate your itinerary. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && !loading) {
      generateItinerary();
    }
  }

  return (
    <main className="ai-planner">

      {/* =========================
          HEADER
      ========================= */}

      <section className="planner-header">

        <p className="section-eyebrow">
          AI TRAVEL PLANNER
        </p>

        <h1>
          Plan your trip
          <br />
          <span>with AI.</span>
        </h1>

        <p>
          Tell us where you're going and how long
          you're staying. We'll create a personalized
          travel plan for you.
        </p>

      </section>


      {/* =========================
          PLANNER FORM
      ========================= */}

      <section className="planner-form">

        <div className="planner-field">

          <label htmlFor="destination">
            Destination
          </label>

          <input
            id="destination"
            type="text"
            placeholder="e.g. Paris, Tokyo, Bali"
            value={destination}
            onChange={(event) => {
              setDestination(event.target.value);
              setError("");
            }}
            onKeyDown={handleKeyDown}
          />

        </div>


        <div className="planner-field">

          <label htmlFor="days">
            Trip duration
          </label>

          <select
            id="days"
            value={days}
            onChange={(event) =>
              setDays(Number(event.target.value))
            }
          >
            <option value={1}>1 Day</option>
            <option value={2}>2 Days</option>
            <option value={3}>3 Days</option>
            <option value={4}>4 Days</option>
            <option value={5}>5 Days</option>
            <option value={6}>6 Days</option>
            <option value={7}>7 Days</option>
          </select>

        </div>


        <button
          className="planner-button"
          onClick={generateItinerary}
          disabled={loading}
        >

          {loading ? (
            <>
              <span className="planner-button-spinner"></span>
              Planning your trip...
            </>
          ) : (
            <>
              Generate itinerary
              <span>→</span>
            </>
          )}

        </button>


        {error && (
          <div className="planner-error">
            <strong>Something went wrong</strong>
            <p>{error}</p>
          </div>
        )}

      </section>


      {/* =========================
          ITINERARY RESULT
      ========================= */}

      {itinerary && (

        <section className="itinerary-section">

          <div className="itinerary-heading">

            <div>
              <p className="section-eyebrow">
                YOUR PERSONALIZED PLAN
              </p>

              <h2>
                {days}-day trip to{" "}
                <span>{destination}.</span>
              </h2>
            </div>

            <div className="itinerary-status">
              AI GENERATED
            </div>

          </div>


          <div className="itinerary-content">

            <ReactMarkdown>
              {itinerary}
            </ReactMarkdown>

          </div>

        </section>

      )}

    </main>
  );
}

export default AIPlanner;