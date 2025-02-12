const { GoogleGenerativeAI } = require("@google/generative-ai");
  
  const apiKey = "AIzaSyBQh8KpyjRsEDGAuaud7fEmQZhiicKwyOE";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run() {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage("3 word sentence");
    console.log(result.response.text());
  }
  
  run();