const API_KEY = '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';
const API_URL = "https://api.openai.com/v1/chat/completions";



const promptInput = document.getElementById("promptInput");
const generateBtn = document.getElementById("generateBtn");
const stopBtn = document.getElementById("stopBtn");
const resultText = document.getElementById("resultText");


  const generate = async () => {

    try {
      // Fetch the response from the OpenAI API with the signal from AbortController
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: promptInput.value }],
        }),
      });
  
      const data = await response.json();
      resultText.innerText = data.choices[0].message.content;
    } catch (error) {
      console.error("Error:", error);
      resultText.innerText = "Error occurred while generating.";
    }
  };

  promptInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      generate();
    }
  });
  generateBtn.addEventListener("click", generate);
