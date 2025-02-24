import { ModelProvider } from "../types.js";

export const TelkomAI: ModelProvider = {
  id: "telkomai",
  displayName: "TelkomAI",
  extraParameters: [],
  models: [
    {
      model: "gpt-4o",
      displayName: "GPT-4o",
      contextLength: 128_000,
      maxCompletionTokens: 4096,
      recommendedFor: ["chat"],
    },
    {
      model: "gpt-4o-mini",
      displayName: "GPT-4o Mini",
      maxCompletionTokens: 4096,
      contextLength: 128_000,
      recommendedFor: ["chat"],
    },
    {
      model: "qwen2.5-coder:7b",
      displayName: "Qwen 2.5 Coder 7b",
      maxCompletionTokens: 4096,
      contextLength: 128_000,
      recommendedFor: ["chat"],
    },
    {
      model: "qwen2.5-coder:14b",
      displayName: "Qwen 2.5 Coder 14b",
      maxCompletionTokens: 4096,
      contextLength: 128_000,
      recommendedFor: ["chat"],
    }
  ],
};
