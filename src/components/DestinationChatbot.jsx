import { useState } from "react";
import { askGemini } from "../services/aiService";

function DestinationChatbot({ destination }) {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleAsk() {
    if (!question.trim() || loading) {
      return;
    }

    const userQuestion = question.trim();

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        content: userQuestion,
      },
    ]);

    setQuestion("");
    setLoading(true);

    try {
      const prompt = `
You are NOMADIA's travel assistant.

The user is currently exploring:
Destination: ${destination.name}
Country: ${destination.country}

Answer the user's travel question about this destination.

User question:
${userQuestion}

Rules:
- Give a helpful and practical answer.
- Keep the answer concise.
- Use simple language.
- Use bullet points when useful.
- Do not use tables.
- Focus specifically on ${destination.name}.
- Do not mention that you are an AI unless necessary.
`;

      const answer = await askGemini(prompt);

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: answer,
        },
      ]);
    } catch (error) {
      console.error("CHATBOT ERROR:", error);

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't answer that right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleAsk();
    }
  }

  return (
    <section className="destination-chatbot">

      <div className="chatbot-heading">
        <div>
          <p className="section-eyebrow">
            NOMADIA AI ASSISTANT
          </p>

          <h2>
            Ask about{" "}
            <span>{destination.name}.</span>
          </h2>
        </div>

        <p>
          Have a question about your trip?
          Ask our AI travel assistant.
        </p>
      </div>


      <div className="chatbot-box">

        <div className="chatbot-messages">

          {messages.length === 0 && (
            <div className="chatbot-empty">

              <div className="chatbot-icon">
                ✦
              </div>

              <h3>
                What would you like to know?
              </h3>

              <p>
                Ask anything about food, places,
                transport, activities or travel tips.
              </p>

              <div className="chatbot-suggestions">

                <button
                  onClick={() =>
                    setQuestion(
                      `What are the best places to visit in ${destination.name}?`
                    )
                  }
                >
                  Best places to visit
                </button>

                <button
                  onClick={() =>
                    setQuestion(
                      `What food should I try in ${destination.name}?`
                    )
                  }
                >
                  Local food to try
                </button>

                <button
                  onClick={() =>
                    setQuestion(
                      `What should I know before visiting ${destination.name}?`
                    )
                  }
                >
                  Travel tips
                </button>

              </div>

            </div>
          )}


          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${message.role}`}
            >
              <div className="chat-message-label">
                {message.role === "user"
                  ? "YOU"
                  : "NOMADIA AI"}
              </div>

              <p>{message.content}</p>
            </div>
          ))}


          {loading && (
            <div className="chat-message assistant">

              <div className="chat-message-label">
                NOMADIA AI
              </div>

              <div className="chatbot-loading">
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>
          )}

        </div>


        <div className="chatbot-input-area">

          <input
            type="text"
            placeholder={`Ask anything about ${destination.name}...`}
            value={question}
            onChange={(event) =>
              setQuestion(event.target.value)
            }
            onKeyDown={handleKeyDown}
            disabled={loading}
          />

          <button
            onClick={handleAsk}
            disabled={loading || !question.trim()}
          >
            {loading ? "..." : "Ask"}
          </button>

        </div>

      </div>

    </section>
  );
}

export default DestinationChatbot;