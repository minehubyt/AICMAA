
import { GoogleGenAI } from "@google/genai";

export class AICMAA_AI {
  // Creating a new instance right before the API call ensures it always uses the current environment configuration
  
  constructor() {}

  async askAssistant(prompt: string) {
    // Create a new GoogleGenAI instance right before making an API call
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      // Using ai.models.generateContent with model name and prompt directly
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: "You are the AICMAA (All India CMA Association) AI Research Assistant. Your goal is to provide expert insights on Indian economic policy, cost and management accounting (CMA) regulations, and corporate governance. Be professional, concise, and authoritative. If a user asks something unrelated to economics, finance, or policy, gently guide them back to AICMAA's focus areas.",
          temperature: 0.7,
        },
      });
      // Directly accessing the .text property of GenerateContentResponse
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm sorry, I'm experiencing some technical difficulties. Please try again later.";
    }
  }
}

export const aicmaaAi = new AICMAA_AI();
