const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

const API_URL =
  "https://openrouter.ai/api/v1/chat/completions";

export async function askGemini(prompt) {
  console.log(
    "OPENROUTER KEY EXISTS:",
    !!API_KEY
  );

  if (!API_KEY) {
    throw new Error(
      "OpenRouter API key is missing from .env"
    );
  }

  const response = await fetch(API_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${API_KEY}`,

      "HTTP-Referer": window.location.origin,

      "X-Title": "NOMADIA Travel Explorer",
    },

    body: JSON.stringify({
      model: "openrouter/free",

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  console.log(
    "OPENROUTER STATUS:",
    response.status
  );

  const text = await response.text();

  console.log(
    "OPENROUTER RESPONSE:",
    text
  );

  console.log(
    "OPENROUTER RESPONSE RECEIVED"
  );

  if (!response.ok) {
    let errorMessage =
      `OpenRouter request failed: ${response.status}`;

    try {
      const errorData = JSON.parse(text);

      errorMessage =
        errorData?.error?.message ||
        errorMessage;
    } catch {
      // Keep default error message
    }

    throw new Error(errorMessage);
  }

  let data;

  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(
      "OpenRouter returned an invalid response."
    );
  }

  const result =
    data?.choices?.[0]?.message?.content;

  if (!result) {
    throw new Error(
      "OpenRouter returned an empty response."
    );
  }

  return result;
}