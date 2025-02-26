import OpenAI from "./OpenAI.js";
import { LLMOptions } from "../../index.js";
import { LlmApiRequestType } from "../openaiTypeConverters.js";

class TelkomAI extends OpenAI {
  static providerName = "telkomai";

  protected supportsPrediction(model: string): boolean {
    return false;
  }

  public supportsCompletions(): boolean {
    return false;
  }

  protected useOpenAIAdapterFor: (LlmApiRequestType | "*")[] = [];

  static defaultOptions: Partial<LLMOptions> = {
    apiBase: "https://api-stage-aitools.telkom.design/v1/openai",
    apiType: "telkomai",
  };

  constructor(options: LLMOptions) {
    super(options);
  }

}

export default TelkomAI;
