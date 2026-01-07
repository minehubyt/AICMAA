
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || "";

export class AICMAA_AI {
  private ai: GoogleGenAI;
  
  constructor() {
    this.ai = new GoogleGenAI({ apiKey });
  }

  async askAssistant(prompt: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: "You are the AICMAA (All India CMA Association) AI Research Assistant. Your goal is to provide expert insights on Indian economic policy, cost and management accounting (CMA) regulations, and corporate governance. Be professional, concise, and authoritative. If a user asks something unrelated to economics, finance, or policy, gently guide them back to AICMAA's focus areas.",
          temperature: 0.7,
        },
      });
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm sorry, I'm experiencing some technical difficulties. Please try again later.";
    }
  }
}

export const aicmaaAi = new AICMAA_AI();
