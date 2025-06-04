import { ExecutionContext, ExecutionResult } from '@flowgram.ai/runtime-interface';

import { delay } from '@workflow/infra';
import { LLMExecutor, LLMExecutorInputs } from '@workflow/executor/llm';

export class MockLLMExecutor extends LLMExecutor {
  public async execute(context: ExecutionContext): Promise<ExecutionResult> {
    const inputs = context.inputs as LLMExecutorInputs;
    this.checkInputs(inputs);
    await delay(100); // TODO mock node run
    const result = `Hi, I'm an AI assistant, my name is ${inputs.modelName}, temperature is ${inputs.temperature}, system prompt is "${inputs.systemPrompt}", prompt is "${inputs.prompt}"`;
    return {
      outputs: {
        result,
      },
    };
  }
}
